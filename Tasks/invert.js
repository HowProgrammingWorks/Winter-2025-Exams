// Step 5
// Improve iteration
// Initiallize newArray
// Replace .forEach() method for for...of loop

'use strict';

const invert = (array) => {
  const newArray = [];
  for (const element of array) {
    newArray.unshift(element);
  }
  return newArray;
};

module.exports = invert;
