// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 5. rewrite func using while-loop

"use strict";

const invert = (array) => {
  const result = [];
  while (array.length) result.push(array.pop());
  return result;
};

module.exports = invert;
