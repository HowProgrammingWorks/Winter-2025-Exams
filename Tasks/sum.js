// Refactor following solution
// Sum all numbers from an array

'use strict';

const sum = (arr) => {
  let res = 0;
  for (const el of arr) {
    const type = typeof el;
    if (type === 'number') {
      res += el;
    }
  }
  return res;
};

module.exports = sum;
