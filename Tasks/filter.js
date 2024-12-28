'use strict';

// Step5: Get rid of 'dead code' and unreachable code

const filterArray = (array, type) => {
  const result = [];
  for (const item of array) {
    const index = array.indexOf(item);
    if (typeof array[index] === type) {
      result.push(item);
    }
  }
  return result;
};

module.exports = filterArray;
