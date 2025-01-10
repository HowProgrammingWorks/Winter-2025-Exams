// Count types in an array

'use strict';

const countTypes = (array) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of array) {
    const type = typeof element;
    types[type]++;
  }
  return types;
};

module.exports = countTypes;
