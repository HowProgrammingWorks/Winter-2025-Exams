// Refactor following solution
// Get one random element from an array

// Step 1. add "use strict"

"use strict";

const SAMPLE = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = SAMPLE;
