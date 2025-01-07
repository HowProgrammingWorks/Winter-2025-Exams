// Refactor following solution
// Count words in a string

// Step 5: removed the unnecessary if statements and blocks

'use strict';

const words = (str) => {
  let result = 0;
  let flag = false;

  for (const c of str) {
    if (c !== ' ') {
      if (!flag) {
        result++;
      }
      flag = true;
    } else {
      flag = false;
    }
  }

  return result;
};

module.exports = words;
