// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 3
// add loop for zipping

'use strict';

const zip = (a = [], b = []) => {
  const minLength = Math.min(a.length, b.length);
  const zipped = [];

  for (let i = 0; i < minLength; i++) {
    zipped.push([a[i], b[i]]);
  }

  return zipped;
};

module.exports = zip;
