// Refactor following solution
// Sum all numbers from an array

'use strict';

const sum = (arr) =>
  arr
    .filter((el) => typeof el === 'number')
    .reduce((curSum, el) => curSum + el, 0);

module.exports = sum;
