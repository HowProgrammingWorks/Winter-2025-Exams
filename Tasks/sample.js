// Refactor following solution
// Get one random element from an array

//Step 4
//Decompose into two functions

'use strict';

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const randomElement = (arr) => arr[getRandomIndex(arr)];

module.exports = randomElement;
