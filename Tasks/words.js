// Count words in a string

'use strict';

const countWords = (str) => {
  let wordsNum = 0;
  let flag = false;
  for (const char of str) {
    if (flag === false) {
      flag = char === ' ' ? flag : !flag;
      wordsNum++;
    } else {
      flag = char === ' ' ? !flag : flag;
    }
  }
  return wordsNum;
};

module.exports = countWords;
