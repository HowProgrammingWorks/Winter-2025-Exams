// Refactor following solution
// Get one random element from an array
"use strict";

const sample = (arr) => {
  let element = arr[Math.floor(Math.random() * arr.length)];
  return element;
};

module.exports = sample;