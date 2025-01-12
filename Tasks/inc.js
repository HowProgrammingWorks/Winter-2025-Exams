// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const inc = (dict) => {
  return Object.entries(dict).reduce((acc, [key, value]) => {
    acc[key] = typeof value === 'number' ? value + 1 : value;
    return acc;
  }, {});
};

module.exports = inc;
