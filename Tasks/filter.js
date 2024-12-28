'use strict';

// Step4: Avoid changing the original object in function

const filterArray = (array, type) => {
  const result = [];
  for (const item of array) {
    const index = array.indexOf(item);
    if (typeof array[index] === type) {
      result.push(item);
    }
  }
  for (const item of result) array.splice(item, 1);
  return result;
};

module.exports = filterArray;
