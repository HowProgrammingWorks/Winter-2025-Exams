// Refactor following solution
// Count words in a string

"use strict";

const counterOfWords = function (str) {
  let numberOfWords = 0;
  let flag = false;
  for (const word of str) {
    if (!flag) {
      if (word === " ") {
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
        numberOfWords++;
      }
    } else {
      if (word === " ") {
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
      }
    }
  }
  return numberOfWords;
};

module.exports = counterOfWords;
