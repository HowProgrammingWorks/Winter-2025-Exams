// Refactor following solution
// Sum all numbers from an array

'use strict';

const sum = (arr) =>
  arr.reduce(
    (curSum, el) => (typeof el === 'number' ? curSum + el : curSum),
    0,
  );

module.exports = sum;
