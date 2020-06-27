import { HookContext } from '@feathersjs/feathers';

import StoryModel from './models/story';
import WordModel from './models/word';
import ReactionModel from './models/reaction';
import CommentModel from './models/comment';

import * as whitelist from './whitelist.json';

interface Story{
  _id: string,
  content: string,
  handle?: string,
  isPositiveExperience?: string,
  date: number
}

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

interface StoryWithReactions{
  _id: string,
  content: string,
  handle?: string,
  isPositiveExperience?: string,
  date: number,
  reactions: ReactionCounts | number
}

const hasContent = async (context: HookContext) => {
    const { content } = context.data;
    if(!content){
        throw new Error('Story content cannot be empty');
    }
    return context;
};

const hasReaction = async (context: HookContext) => {
    const { reaction } = context.data;
    if(!reaction){
        throw new Error('Reaction cannot be empty');
    }
};

const hasComment = async (context: HookContext) => {
    const { comment } = context.data;
    if(!comment){
	throw new Error('Comment cannot be empty');
    }
};

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

const listIds = (res: Array<Story>) => {
    return res.map( (x: Story) => x._id );
}

const sum = (xs: Array<number>) => xs.reduce( (x: number, y: number) => x + y, 0 );

const randomStory = async (context: HookContext) => {
    /*
      Dodgy union type member reactions of storiesWithReactions
      TODO: we need 3 types, plain stories, stories with ReactionCounts, stories with reduced reaction counts.
     */
    const ids = listIds(context.result);
    const reactionRoute = '/stories/:storyId/reactions/count';
    const reactionService = context.app.service(reactionRoute);
    const findParams = (storyId: string) => ({ route: { storyId } });
    const storiesWithReactions: Array<StoryWithReactions> = await Promise.all(
	context.result.map( async (story: Story) => ({ ...story, reactions: await reactionService.find(findParams(story._id) ) }))
    )
    // Replace delineated reaction counts to global sum
    storiesWithReactions.forEach( (r: StoryWithReactions) => {
	const reactValues: Array<number> = Object.values(r.reactions);
	r.reactions = sum(reactValues)
    })
    // sort reaction by engagement (sum of all reactions)
    // Array.sort is done in place :sob
    storiesWithReactions.sort(function(reactionA, reactionB){
	return Number(reactionB.reactions) - Number(reactionA.reactions);
    })
    context.result = storiesWithReactions;
    if(storiesWithReactions.length < 3){
	return context;
    }
    context.result = storiesWithReactions.slice(0, 4)
    /*
      Vestigial remain of highlights being randomly selected
      result = [...new Array(3)].map(() => pick(result));
     */
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
};

const addWhitelists = async (context: HookContext) => {
    const stories = context.result.map( (story: any) => {
        const whiteList = createWhiteList(story.content);
        return { whiteList, ...story };
    });
    context.result = stories;
    return context;
};

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
        create: [hasContent, createdAt, filterHandle],
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
        create: [hasReaction, createdAt, linkToId],
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
      create: [hasComment, createdAt, linkToId],
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

