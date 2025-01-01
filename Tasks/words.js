// Refactor following solution
// Count words in a string
'use strict'

let Words = function (s) {
  let numberOfWordsInS = 0;
  let flag = false;
  for (let c of s) {
    if (c === ' ') {
      flag = false;
    } else if (!flag) {
      flag = true;
      numberOfWordsInS++;
    }
  }
  return numberOfWordsInS;
};

module.exports = Words;
