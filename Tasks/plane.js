// Step 7
// Replace `if...else` statement for ternary operator

'use strict';

const getFlatArray = (array) => {
  const result = [];
  for (const value of array) {
    Array.isArray(value)
      ? result.push(...getFlatArray(value))
      : result.push(value);
  }
  return result;
};

module.exports = getFlatArray;
