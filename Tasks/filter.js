'use strict';

// Step3: Improve naming of identifiers
// Prefer camelCase and descriptive names

const filterArray = (array, type) => {
  const remove = [];
  for (const item of array) {
    const index = array.indexOf(item);
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const item of remove) array.splice(item, 1);
  return array;
};

module.exports = filterArray;
