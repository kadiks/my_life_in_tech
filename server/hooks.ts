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

const addWhitelists = async (context: HookContext) => {
    const words = whitelist.words;
    const tempResult = context.result;
    for (const story of tempResult) {
	const storyWords = story.content.split(' ');
	const found = words.filter((w) => storyWords.includes(w));
	story.whitelist = found;
    }
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

const commentsHook = {
  before: {
      create: [createdAt, linkToId],
      find: [filterByStory],
  },
};

//

export default {
    story: storyHook,
    highlighted: highlightHook,
    reactions: reactionsHook,
    comments: commentsHook,
};
