// Refactor following solution
// Count words in a string

// Step 4: main function is now an arrow function

'use strict';

const words = (str) => {
  let result = 0;
  let flag = false;
  for (const c of str) {
    if (!flag) {
      if (c === ' ') {
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
        result++;
      }
    } else {
      if (c === ' ') {
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
  return result;
};

module.exports = words;
