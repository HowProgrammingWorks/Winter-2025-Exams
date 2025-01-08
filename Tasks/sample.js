// Refactor following solution
// Get one random element from an array

//Step 2
//Rename variable for better understanding

'use strict';

const randomElement = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = randomElement;
