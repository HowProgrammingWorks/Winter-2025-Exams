// Refactor following solution
// Count words in a string

"use strict";

const counterOfWords = (str) => {
  let numberOfWords = 0;
  let flag = false;
  for (const word of str) {
    if (!flag) {
      if (word === " ") {
        flag = false;
      } else {
        flag = true;
        numberOfWords++;
      };
    } else {
      if (word === " ") {
        flag = false;
      } else {
        flag = true;
      };
    };
  };
  return numberOfWords;
};

module.exports = counterOfWords;
