'use strict';

// Step5: Delete reduntant conditions in 'if-else' block

const words = (str) => {
  let wordsNumber = 0;
  let isInsideWord = false;
  for (const char of str) {
    if (!isInsideWord) {
      if (char === ' ') {
        isInsideWord = false;
      } else {
        isInsideWord = true;
        wordsNumber++;
      }
    } else {
      if (char === ' ') {
        isInsideWord = false;
      } else {
        isInsideWord = true;
      }
    }
  }
  return wordsNumber;
};

module.exports = words;
