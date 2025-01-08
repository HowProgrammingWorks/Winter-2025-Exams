// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 2:
// Remove unnecessary statements

"use strict";

const zip = (a = [], b = []) => {
  let i = 0;
  let j = 0;
  for (const x of b) {
    const CELL = [a[i++], x];
    b[j++] = CELL;
    if (CELL[0] == undefined) b.length -= 1
  }
  return b;
};

module.exports = zip;
