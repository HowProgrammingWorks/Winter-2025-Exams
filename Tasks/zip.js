// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 1:
// Use "use strict"
// Use const and let
// Prefer using arrow functions

"use strict";

const zip = (a = [], b = []) => {
  let i = 0;
  let j = 0;
  for (const x of b) {
    const CELL = [a[i++], x];
    if (i < j) {
      delete a[i++];
    } else {
      (() => (b[j++] = CELL))();
    }
    if (CELL[0] == undefined) b.length -= 1
  }
  return b;
};

module.exports = zip;
