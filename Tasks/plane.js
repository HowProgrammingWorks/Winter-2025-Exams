// Step 5
// Remove redundant parameters and variables to simplify code
// Add them as intermediate variables

'use strict';

const getFlatArray = (array) => {
  const result = [];
  const length = array.length;
  for (let index = 0; index < length; index++) {
    const value = array[index];
    if (Array.isArray(value)) {
      result.push(...getFlatArray(value));
    } else {
      result.push(value);
    }
  }
  return result;
};

module.exports = getFlatArray;
