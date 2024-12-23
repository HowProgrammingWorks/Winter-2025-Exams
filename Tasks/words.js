'use strict';

// Step8 (optional): Create a variable for ' ' to boost reusability
// Avoid magic string

const EMPTY = ' ';

const words = (str) => {
  let wordsNumber = 0;
  let isInsideWord = false;
  for (const char of str) {
    if (char === EMPTY) {
      isInsideWord = false;
    } else if (!isInsideWord) {
        isInsideWord = true;
        wordsNumber++;
    }
  }
  return wordsNumber;
};

module.exports = words;
