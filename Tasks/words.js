'use strict';

// Step4: Improve naming of identifiers

const words = (str) => {
  let wordsNumber = 0;
  let isInsideWord = false;
  for (const char of str) {
    if (!isInsideWord) {
      if (char === ' ') {
        if (isInsideWord === true) {
          isInsideWord = false;
        } else {
          isInsideWord = false;
        }
      } else {
        if (isInsideWord === true) {
          isInsideWord = true;
        } else {
          isInsideWord = true;
        }
        wordsNumber++;
      }
    } else {
      if (char === ' ') {
        if (isInsideWord === true) {
          isInsideWord = false;
        } else {
          isInsideWord = false;
        }
      } else {
        if (isInsideWord === true) {
          isInsideWord = true;
        } else {
          isInsideWord = true;
        }
      }
    }
  }
  return wordsNumber;
};

module.exports = words;
