// Refactor following solution
// Reverse an array, you can't use .reverse()
"use strict";

const invert = (arr) => {
  let result = [];
  for(let element of arr)
    result.unshift(element);
  arr = result;
  return arr; // .reverse() has data mutability
};

module.exports = invert;