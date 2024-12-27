// Filter array by type name

// Step 2
// replace for...of to for...in
// remove "const index = array.indexOf(element)"


'use strict';

const filter = (array, type) => {
  let remove = [];
  for (const index in array) {
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const index of remove) array.splice(index, 1);
  return array;
};

module.exports = filter;
