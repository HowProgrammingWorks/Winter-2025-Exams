// Refactor following solution
// Filter array by type name
'use strict';

const Filter = (array, type) => {
  const remove = [];
  for (const key of array) {
    const x = array.indexOf(key);
    if (typeof array[x] !== type) {
      remove.unshift(x);
    }
  }
  for (x of remove) array.splice(x, 1);
  return array;
};

module.exports = Filter;
