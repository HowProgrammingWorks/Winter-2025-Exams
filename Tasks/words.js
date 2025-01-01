// Count words in a string

'use strict';

const countWords = (str) => {
  let wordsNum = 0;
  let flag = false;
  for (const char of str) {
    if (flag === false) {
      if (char === ' ') {
        flag = false;
      } else {
        flag = true;
      }
      wordsNum++;
    } else if (char === ' ') {
      flag = false;
    } else {
      flag = true;
    }
  }
  return wordsNum;
};

module.exports = countWords;
