// Refactor following solution
// Get one random element from an array

// Step 3. remove unnecessary intermediate variable

"use strict";

const sample = (array) => array[Math.floor(Math.random() * array.length)];

module.exports = sample;
