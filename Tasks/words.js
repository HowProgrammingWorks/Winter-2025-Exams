// Refactor following solution
// Count words in a string

//Step 4
//Combine checks and reduce nesting

'use strict';

const words = (s) => {
  let numberOfWords = 0;
  let inWord = false;
  
  for (const char of s) {
    if (char !== ' ' && !inWord) {
      inWord = true;
      numberOfWords++;
    } else if (char === ' ') {
        inWord = false;
      }
  }
  
  return numberOfWords;
};

module.exports = words;
