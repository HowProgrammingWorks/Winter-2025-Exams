// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const inc = (dict) => {
  for (const key in dict) {
    if ((typeof dict[key]).charAt(0).toUpperCase() === 'N') {
      dict[key] = dict[key] + 1;
    }
  }
  return dict;
};

module.exports = inc;
