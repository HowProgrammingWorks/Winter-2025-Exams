// Count words in a string

'use strict';

const countWords = (str) => {
  const words = str.split(' ');
  const filteredWords = words.filter((word) => word !== '');
  return filteredWords.length;
};

module.exports = countWords;
