// Step 8
// Use `.reduce()` method to flatten the array recursively
// Remove braces

'use strict';

const getFlatArray = (array) =>
  array.reduce(
    (result, value) =>
      Array.isArray(value)
        ? [...result, ...getFlatArray(value)]
        : [...result, value],
    [],
  );

module.exports = getFlatArray;
