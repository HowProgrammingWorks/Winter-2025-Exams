// Refactor following solution
// Get one random element from an array

'use strict'

const sample = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = sample;
