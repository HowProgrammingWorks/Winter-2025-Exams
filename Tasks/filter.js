// Refactor following solution
// Filter array by type name

// step 3: rename variables and function

'use strict';

const filter = (array, type) => {
  const remove = [];
  for (const element of array) {
    const index = array.indexOf(element);
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const index of remove) array.splice(index, 1);
  return array;
};

module.exports = filter;
