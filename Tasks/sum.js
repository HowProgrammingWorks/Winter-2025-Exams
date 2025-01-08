// Refactor following solution
// Sum all numbers from an array

'use strict';

const sum = (arr) => {
  const res = [0];
  for (const el of arr) {
    const type = typeof el;
    if (type === 'number') {
      if (res.length > 0) {
        const newSum = res[res.length - 1] + el;
        res.push(newSum);
      }
    }
  }
  return res[res.length - 1];
};

module.exports = sum;
