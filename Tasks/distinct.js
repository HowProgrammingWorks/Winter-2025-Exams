'use strict';

// Refactor following solution
// Return an array without duplicates

//First variant of function
//const distinct = (array) => {
//  const numbersArray = array.filter(item => typeof item === 'number')
//  return [...new Set(numbersArray)]
//}

//Second variant of function
const distinct = (array) => {
  const collection = {};

  return array.filter((item) => {
    if (collection[item]) {
      return false;
    }
    collection[item] = true;
    return true;
  });
};

module.exports = distinct;
