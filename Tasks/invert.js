// Step 4
// Remove unnecessary functions and parameters

'use strict';

const invert = (array) => {
  const keys = Object.keys(array);
  keys.forEach((index) => {
    keys[index] = array.pop();
  });
  return keys;
};

module.exports = invert;
