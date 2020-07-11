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

interface Reactions{
    [propName: string]: number,
}

interface StoryWithReactions{
    _id: string,
    content: string,
    handle?: string,
    isPositiveExperience?: string,
    date: number,
    reactions: Reactions
}

interface StoryWithReactionsCount{
    _id: string,
    content: string,
    handle?: string,
    isPositiveExperience?: string,
    date: number,
    reactions: Reactions,
    reactionsCount: number
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

const listIds = (res: Array<Story>) => {
    return res.map( (x: Story) => x._id );
}

const sum = (xs: Array<number>) => {
    return xs.reduce( (x: number, y: number) => x + y, 0 );
}

const findHighlightedStories = async (context: HookContext) => {
    const ids = listIds(context.result);
    const reactionRoute = '/stories/:storyId/reactions/count';
    const reactionService = context.app.service(reactionRoute);
    const findParams = (storyId: string) => ({ route: { storyId } });
    const storiesWithReactions: Array<StoryWithReactions> = await Promise.all(
	context.result.map( async (story: Story) => ({ ...story, reactions: await reactionService.find(findParams(story._id) ) }))
    )
    // Replace delineated reaction counts to global sum
    const storiesWithReactionsCount: Array<StoryWithReactionsCount> = [];
    storiesWithReactions.forEach( (r: StoryWithReactions) => {
	const reactValues: Array<number> = Object.values(r.reactions);
	storiesWithReactionsCount.push({
	    _id: r._id,
	    content: r.content,
	    handle: r.handle,
	    isPositiveExperience: r.isPositiveExperience,
	    date: r.date,
	    reactions: r.reactions,
	    reactionsCount: sum(reactValues)
	})
    })
    storiesWithReactionsCount.sort(function(reactionA, reactionB){
	return Number(reactionB.reactionsCount) - Number(reactionA.reactionsCount);
    })
    context.result = storiesWithReactionsCount;
    if(storiesWithReactionsCount.length < 3){
	return context;
    }
    context.result = storiesWithReactionsCount.slice(0, 4)
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
    let counts: Reactions = {}
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
        find: [findHighlightedStories],
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

