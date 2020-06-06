import Config from '../Config';

const postStory = async ({ handle, isPositiveExperience, content } = {}) => {
  const body = JSON.stringify({
    handle,
    isPositiveExperience,
    content,
  });
  console.log('body', body);
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
  const res = await fetch(`${Config.API_URL}/stories/highlighted`);
  const json = await res.json();

  return json;
};
const getStories = async () => {
  const res = await fetch(`${Config.API_URL}/stories`);
  const json = await res.json();

  return json;
};

const getWhitelists = async () => {
  const res = await fetch(`${Config.API_URL}/whitelist`);
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
