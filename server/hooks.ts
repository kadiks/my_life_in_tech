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

type StoriesWithReactions = Array<StoryWithReactions>;

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

function reactionAdder(context: HookContext){
    return async function(story: Story){
	const reactionRoute = '/stories/:storyId/reactions/count';
	const reactionService = context.app.service(reactionRoute);
	const findParams = (storyId: string) => ({ route: { storyId } });
	const reactions = await reactionService.find(findParams(story._id))
	return {
	    ...story,
	    reactions
	};
    }
}


const addReactions = async (context: HookContext) => {
    const stories = context.result;
    const addReactionsToStory = reactionAdder(context)
    let storiesWithReactions: StoriesWithReactions = await Promise.all(
	context.result.map( addReactionsToStory )
    )
    context.result = storiesWithReactions;
    return context;
};


const addReactionsToStory = async (context: HookContext) => {
    const story = context.result;
    context.result = await reactionAdder(context)(story);
    return context;
};

function addReactionCount( storyWithReactions: StoryWithReactions ){
    const reactions = storyWithReactions.reactions;
    const reactValues: Array<number> = Object.values(reactions);
    const reactionsCount = sum(reactValues);
    return {
	_id: storyWithReactions._id,
	content: storyWithReactions.content,
	handle: storyWithReactions.handle,
	isPositiveExperience: storyWithReactions.isPositiveExperience,
	date: storyWithReactions.date,
	reactions: storyWithReactions.reactions,
	reactionsCount
    }
}

const findHighlightedStories = async (context: HookContext) => {
    const ids = listIds(context.result);
    const addReactionsToStory = reactionAdder(context)
    // Add reactions to stories
    const storiesWithReactions: Array<StoryWithReactions> = await Promise.all(
	context.result.map( addReactionsToStory )
    )
    // Add a count of all reactions per story
    const storiesWithReactionsCount = storiesWithReactions.map( addReactionCount )
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

const storyHook = {
    before: {
        create: [hasContent, createdAt, filterHandle],
    },
    after: {
        // One story
        get: [addWhiteList, addReactionsToStory],
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

