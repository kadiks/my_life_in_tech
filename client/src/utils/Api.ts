import qs from 'qs';

import Config from '../Config';

const postStory = async ({ handle, isPositiveExperience, content } = {}) => {
  const body = JSON.stringify({
    handle,
    isPositiveExperience,
    content,
  });
  try {
    const res = await fetch(`${Config.API_URL}/stories`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    });
    const json = await res.json();
    return json;
  } catch (e) {
    return {
      error: e,
    };
  }
};

const getHighlightedStories = async () => {
  const url = `${Config.API_URL}/stories/highlighted`;
  //   console.log('url', url);
  const res = await fetch(url);
  const json = await res.json();

  return json;
};
const getPaginatedStories = async ({
  base = 6,
  additional = 3,
  index = 0,
} = {}) => {
  const limit = index === 0 ? base : additional;
  const skip = index === 0 ? 0 : base + additional * (index - 1);
  // console.log('index', index);
  // console.log('limit', limit);
  // console.log('skip', skip);
  return getStories({
    limit,
    skip,
  });
};

const getStories = async ({ limit = null, skip = null } = {}) => {
  const params = {
    '$sort[date]': -1,
  };
  if (limit !== null) {
    params['$limit'] = limit;
  }
  if (skip !== null) {
    params['$skip'] = skip;
  }
  const url = `${Config.API_URL}/stories?${qs.stringify(params)}`;
  // console.log('#getStories url', url);
  const res = await fetch(url);
  const json = await res.json();

  return json;
};

const getStory = async ({ id }) => {
  // console.log('#getStory id', id);
  const url = `${Config.API_URL}/stories/${id}`;
  //   console.log('url', url);
  const res = await fetch(url);
  const json = await res.json();

  return json;
};

const getWhitelists = async () => {
  const url = `${Config.API_URL}/whitelist`;
  //   console.log('url', url);
  const res = await fetch(url);
  const json = await res.json();

  const whitelist = json.map((w) => w.word);
  whitelist.push('discrimination');
  whitelist.push('codes sociaux');
  whitelist.push('societe');
  whitelist.push('crise');
  whitelist.push('auto-exclusion');
  return whitelist;
};

const getStoryReactions = async ({ storyId }) => {
  const url = `${Config.API_URL}/stories/${storyId}/reactions/count`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const incrementReaction = async ({ name, storyId }) => {
  console.log('#incrementReaction name', name);
  const url = `${Config.API_URL}/stories/${storyId}/reactions`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reaction: name,
      }),
    });
    const json = await res.json();
    return json;
  } catch (e) {
    return {
      error: e,
    };
  }
};

export {
  getHighlightedStories,
  getStories,
  getStoryReactions,
  getStory,
  getWhitelists,
  getPaginatedStories,
  incrementReaction,
  postStory,
};
