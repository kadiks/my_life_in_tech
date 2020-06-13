import { HookContext } from '@feathersjs/feathers';

import * as whitelist from './whitelist.json';

const createdAt = async (context: HookContext) => {
  context.data.date = Date.now();
  return context;
};

const linkToId = async (context: HookContext) => {
    const storyId = context.params.route!.storyId;
    context.data.storyId = storyId;
    return context;
};

const filterHandle = async (context: HookContext) => {
    if (!context.data.handle) {
        context.data.handle = '';
    }
    return context;
};

const pick = (xs: Array<Object>) => {
    const index = Math.floor(Math.random() * xs.length);
    return xs[index];
};

const randomStory = async (context: HookContext) => {
    context.result = [...new Array(3)].map(() => pick(context.result));
    return context;
};

const error = async (context: HookContext) => {
    console.log(context.error);
    return context;
};

const filterByStory = async (context: HookContext) => {
    const storyId = context.params.route!.storyId;
    context.params.query = { storyId };
    return context;
};

function createWhiteList(comment: any): Array<string>{
    const whiteWords = whitelist.words;
    const storyWords = comment.split(' ');
    const whiteList = whiteWords.filter((w: string) => storyWords.includes(w));
    return whiteList;
}

const addWhiteList = async (context: HookContext) => {
    const story = context.result;
    story.whiteList = createWhiteList(story.content);
    console.log(story);
};

const addWhitelists = async (context: HookContext) => {
    const stories = context.result.map( (story: any) => {
	const whiteList = createWhiteList(story.content);
	return { whiteList, ...story };
    });
    context.result = stories;
    return context;
};

interface StoryReaction{
   _id: string,
    reaction: string,
    date: number,
    storyId: string,
    __v: number
}

interface ReactionCounts{
    [propName: string]: number,
}

const mergeCount = async (context: HookContext) => {
    let result: Array<StoryReaction> = context.result
    let counts: ReactionCounts = {}
    result.forEach( (item: StoryReaction) => {
	if(item.reaction in counts){
	    counts[item.reaction]++;
	}else{
	    counts[item.reaction] = 1;
	}
    })
    context.result = counts;
    return context;
};


const addReactions = async (context: HookContext) => {
    return context;
};

const storyHook = {
    before: {
	create: [createdAt, filterHandle],
    },
    after: {
	// One story
	get: [addWhiteList, addReactions],
	// All stories
	find: [addWhitelists, addReactions],
    },
};


const highlightHook = {
    after: {
        find: [randomStory],
    },
    error: {
        all: [error],
    },
};

const reactionsHook = {
    before: {
	create: [createdAt, linkToId],
	find: [filterByStory],
    },
};

const reactionsCountHook = {
    before: {
	create: [createdAt, linkToId],
	find: [filterByStory],
    },
    after: {
	find: [mergeCount],
    }
}


const commentsHook = {
  before: {
      create: [createdAt, linkToId],
      find: [filterByStory],
  },
};

export default {
    story: storyHook,
    highlighted: highlightHook,
    reactions: reactionsHook,
    reactionsCount: reactionsCountHook,
    comments: commentsHook,
};

