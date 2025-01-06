// Refactor following solution
// Sum all numbers from an array

// Step 6: sum is now calculated by direct assignment and returned. Done

'use strict';

const sum = (arr) => {
  let res = 0;
  for (const elem of arr) {
    if (typeof elem === 'number') {
      res += elem;
    }
  }
  return res;
};

module.exports = sum;
