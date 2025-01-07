// Refactor following solution
// Sum all number values in dict

// step 5: rewrite function to functional programming style

'use strict';

const count = (obj) =>
  Object.keys(obj)
    .filter((key) => typeof obj[key] === 'number')
    .reduce((sum, key) => sum + obj[key], 0);

module.exports = count;
