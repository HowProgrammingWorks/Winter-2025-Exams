// Step 4
// Convert to arrow function

'use strict';

const getFlatArray = (array, result = []) => {
  for (let index = 0, length = array.length; index < length; index++) {
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
