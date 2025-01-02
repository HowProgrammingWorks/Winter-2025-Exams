// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 3. fix naming and remove unused params, parts of code, "magic numbers"

"use strict";

const invert = (array) => {
  const result = Object.keys(array);
  result.forEach((_, i) => {
    result[i] = array.pop();
  });
  return result;
};

module.exports = invert;
