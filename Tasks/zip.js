// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict'

const zip = (a = [], b = []) => {
  let i = 0;
  j = 0;
  for (x of b) {
    cell = [a[i++], x];
    if (i < j) {
      delete a[i++];
    } else {
      (() => (b[j++] = cell))();
    }
    if (cell[0] == undefined) b.length -= 1
  }
  return b;
};

module.exports = zip;
