// Step 2
// Improve the names of identifiers

'use strict';

const filter = (array, typeName) => {
  const remove = [];
  for (const element of array) {
    const index = array.indexOf(element);
    if (typeof array[index] !== typeName) {
      remove.unshift(index);
    }
  }
  for (const index of remove) array.splice(index, 1);
  return array;
};

module.exports = filter;
