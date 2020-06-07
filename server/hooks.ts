import { HookContext } from '@feathersjs/feathers';

import * as whitelist from './whitelist.json';

const createdAt = async (context: HookContext) => {
  context.data.date = Date.now();
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
  return context;
};

const addWhitelists = async (context: HookContext) => {
  // console.log('adding whitelists');
  const words = whitelist.words;
  // console.log('adding whitelists #2');
  const tempResult = context.result;
  // console.log('adding whitelists #3');
  for (const story of tempResult) {
    // console.log('adding whitelists #3 story', story);
    const storyWords = story.content.split(' ');
    // console.log('adding whitelists #4');
    const found = words.filter((w) => storyWords.includes(w));
    // console.log('adding whitelists #5');
    // console.log(storyWords);
    story.whitelist = found;
    // console.log('adding whitelists #6');
  }
  return context;
};

const addReactions = async (context: HookContext) => {
  //console.log('adding reactions')
  //const app = context.app
  //const findReactions = app.services['stories/:storieId/reactions'].find
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
    create: [createdAt],
    find: [filterByStory],
  },
};

export default {
  story: storyHook,
  highlighted: highlightHook,
  reactions: reactionsHook,
};
