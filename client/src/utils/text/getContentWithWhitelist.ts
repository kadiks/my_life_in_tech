import { remove } from 'diacritics';

export default ({ content, whitelist }) => {
  const cleanContent = remove(content);
  //   console.log('diacritics', remove);
  const positions = [];
  // get the starting index and length of each matching words from the clean content
  whitelist.forEach((word) => {
    if (cleanContent.includes(word) === true) {
      //   console.log('word', word);
      const index = cleanContent.indexOf(word);
      positions.push({ index, wordLength: word.length });
    }
  });
  //   console.log('content', content);
  //   console.log('positions', positions);
  // in the original content, find the real word with accents
  const actualWords = positions.map((p) => {
    const word = content.substring(p.index, p.index + p.wordLength);
    return word;
  });
  let finalContent = content;
  actualWords.forEach((word) => {
    finalContent = content.replace(word, `<span class="hl">${word}</span>`);
  });
  return { __html: finalContent };
};
