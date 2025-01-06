'use strict'

// Refactor following solution
// Reverse an array, you can't use .reverse()

const reverseArray = (array) => {
  return array.reduce((acc, curr) => [curr, ...acc], []);
};

module.exports = reverseArray;
