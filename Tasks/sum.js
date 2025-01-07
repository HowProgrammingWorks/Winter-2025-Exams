// Refactor following solution
// Sum all numbers from an array

// step 6: simplified function logic

'use strict';

const sum = (array) => {
  let res = 0;

  for (const elem of array) {
    if (typeof elem === 'number') {
      res += elem;
    }
  }

  return res;
};

module.exports = sum;
