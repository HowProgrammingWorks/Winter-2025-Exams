// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 4. replace forEach-loop with for...

"use strict";

const invert = (array) => {
  const result = [];
  const length = array.length;
  for (let i = 0; i < length; i++) result[i] = array.pop();
  return result;
};

module.exports = invert;
