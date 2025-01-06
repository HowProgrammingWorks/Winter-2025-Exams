// Step 6
// Improve iteration
// Delete `length` variable
// Replace `for` loop for `for...of`

'use strict';

const getFlatArray = (array) => {
  const result = [];
  for (const value of array) {
    if (Array.isArray(value)) {
      result.push(...getFlatArray(value));
    } else {
      result.push(value);
    }
  }
  return result;
};

module.exports = getFlatArray;
