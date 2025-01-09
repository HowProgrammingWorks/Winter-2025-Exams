// Refactor following solution
// Get one random element from an array

// Step 4. decomposed to random(min, max) and sample(array)

'use strict';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const sample = (array) => array[random(0, array.length - 1)];

module.exports = sample;
