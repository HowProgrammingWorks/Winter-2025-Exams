// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 5. use "lenght" variable and declatation using keyword "new" to avoid resizing an array

'use strict';

const invert = (array) => {
  const length = array.length;
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = array[length - 1 - i];
  }
  return result;
};

module.exports = invert;
