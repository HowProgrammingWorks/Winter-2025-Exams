// Refactor following solution
// Get one random element from an array

//Step 3
//Rewrite the function in one line

'use strict';

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = randomElement;
