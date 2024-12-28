'use strict';

// Step6: Simplify logic

const filterArray = (array, type) => {
  const result = [];
  for (const item of array) {
    if (typeof item === type) {
      result.push(item);
    }
  }
  return result;
};

module.exports = filterArray;
