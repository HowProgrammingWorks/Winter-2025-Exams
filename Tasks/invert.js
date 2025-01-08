// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict';

const invert = (simpleArray) => {
  let reverseArray = [];
  for (const elem of simpleArray) {
    reverseArray.unshift(elem);
  }

  return reverseArray;
};

module.exports = invert;
