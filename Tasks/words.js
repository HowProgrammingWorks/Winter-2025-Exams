// Refactor following solution
// Count words in a string

//Step 2
//Declare variables using `let` and `const`

'use strict';

const words = (s) => {
  let numberOfWords = 0;
  let flag = false;
  for (const char of s) {
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
        numberOfWords++;
      }
    } else {
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
      }
    }
  }
  
  return numberOfWords;
};

module.exports = words;
