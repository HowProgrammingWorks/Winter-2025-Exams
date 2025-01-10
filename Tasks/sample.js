// Refactor following solution
// Get one random element from an array

//Step 4
//Decompose into two functions

'use strict';

const random = (max) => Math.floor(Math.random() * max;

const randomElement = (arr) => arr[random(arr.length)];

module.exports = randomElement;
