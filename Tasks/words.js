'use strict';

// Step7: Replace nested 'else-if' with 'else if'

const words = (str) => {
  let wordsNumber = 0;
  let isInsideWord = false;
  for (const char of str) {
    if (char === ' ') {
      isInsideWord = false;
    } else if (!isInsideWord) {
        isInsideWord = true;
        wordsNumber++;
    }
  }
  return wordsNumber;
};

module.exports = words;
