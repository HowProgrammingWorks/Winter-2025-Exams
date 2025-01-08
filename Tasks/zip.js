// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 4:
// Rename variables using camel case

"use strict";

const zip = (arr1 = [], arr2 = []) => {
  for (let i = 0; i < arr2.length; i++) {
    const cell = [arr1[i], arr2[i]];
    arr2[i] = cell;
    if (cell[0] == undefined) arr2.length -= 1
  }
  return arr2;
};

module.exports = zip;
