// Refactor following solution
// Sum all numbers from an array

// step 7: rewrite function to functional programming style

'use strict';

const isNumber = (elem) => typeof elem === 'number';

const sum = (array) => {
  const filteredArray = array.filter(isNumber);
  return filteredArray.reduce((res, elem) => res + elem, 0);
};

module.exports = sum;
