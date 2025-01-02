// Refactor following solution
// Get one random element from an array

// Step 2. improve naming

"use strict";

const sample = (array) => {
  array = array[Math.floor(Math.random() * array.length)];
  return array;
};

module.exports = sample;
