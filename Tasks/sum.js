// Refactor following solution
// Sum all numbers from an array

// step 7: rewrite function to functional programming style

'use strict';

const sum = (array) =>
  array.reduce((res, elem) => (typeof elem === 'number' ? res + elem : res), 0);

module.exports = sum;
