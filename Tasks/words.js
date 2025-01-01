// Count words in a string

'use strict';

const countWords = (str) => {
  let wordsNum = 0;
  let flag = false;
  for (const char of str) {
    if (!flag) {
      if (char === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
        wordsNum++;
      }
    } else if (char === ' ') {
      if (flag === true) {
        flag = false;
      } else {
        flag = false;
      }
    } else if (flag === true) {
      flag = true;
    } else {
      flag = true;
    }
  }
  return wordsNum;
};

module.exports = countWords;
