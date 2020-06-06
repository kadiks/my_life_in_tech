import Config from '../Config';

const postStory = async (handle, isPositiveExperience, content) => {
  console.log('Config', Config);
  const res = await fetch(`${Config.API_URL}/stories`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      handle,
      isPositiveExperience,
      content,
    }),
  });
  const json = await res.json();
};

export { postStory };
