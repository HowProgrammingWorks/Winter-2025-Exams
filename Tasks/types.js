// Refactor following solution
// Count types in an array

'use strict';

const types = (array) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of array) {
    types[typeof item]++;
  }
  return types;
};

module.exports = types;
