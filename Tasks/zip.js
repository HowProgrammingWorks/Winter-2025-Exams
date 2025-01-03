// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 2
// add variable minLength for future constraint of loop
// add variable zipped for handling work of zipping logic

'use strict';

const zip = (a = [], b = []) => {
  const minLength = Math.min(a.length, b.length);
  const zipped = [];
};

module.exports = zip;
