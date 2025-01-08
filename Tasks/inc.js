// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const inc = (dict) => {
  for (const key in dict) {
    if (typeof dict[key] === 'number') {
      dict[key]++;
    }
  }
  return dict;
};

module.exports = inc;
