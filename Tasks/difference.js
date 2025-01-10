// Refactor following solution
// Find a difference between two dictionaries

'use strict';

const difference = (firstObject, secondObject) => {
  const result = {};
  for (const key in firstObject) {
    if (!(key in secondObject)) {
      result[key] = firstObject[key];
    }
  }
  return result;
};

module.exports = difference;
