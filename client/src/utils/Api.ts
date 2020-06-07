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
const getStories = async () => {
  const url = `${Config.API_URL}/stories?$sort[date]=-1`;
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

export { postStory, getHighlightedStories, getStories, getWhitelists };
