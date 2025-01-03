// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

// Step 1
// add use strict
// rewrite function to arrow

'use strict';

const zip = (a = [], b = []) => {
  let i = 0;
  j = 0;
  for (x of b) {
    CELL = [a[i++], x];
    if (i < j) {
      delete a[i++];
    } else {
      (() => (b[j++] = CELL))();
    }
    if (CELL[0] == undefined) b.length -= 1;
  }
  return b;
};

module.exports = zip;
