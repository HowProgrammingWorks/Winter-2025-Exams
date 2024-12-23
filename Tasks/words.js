'use strict';

// Step6: Change conditions for better clarity
// Prefer more general conditions first to process more efficiently

const words = (str) => {
  let wordsNumber = 0;
  let isInsideWord = false;
  for (const char of str) {
    if (char === ' ') {
      isInsideWord = false;
    } else {
      if (!isInsideWord) {
        isInsideWord = true;
        wordsNumber++;
      }
    }
  }
  return wordsNumber;
};

module.exports = words;
