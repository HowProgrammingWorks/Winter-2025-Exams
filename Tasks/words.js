// Refactor following solution
// Count words in a string

//Step 3
//Remove unneeded if else statements
//Rename variable to make it easier to understand

'use strict';

const words = (s) => {
  let numberOfWords = 0;
  let inWord = false;
  
  for (const char of s) {
    if (!inWord) {
      if (char === ' ') {
        inWord = false;
      } else {
        inWord = true;
        numberOfWords++;
      }
    } else {
      if (char === ' ') {
        inWord = false;
      }
    }
  }
  
  return numberOfWords;
};

module.exports = words;
