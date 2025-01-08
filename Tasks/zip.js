// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = function (a = [], b = []) {
  let i = 0;
  const result = [];

  for (const x of b) {
    const CELL = [a[i++], x];
    result.push(CELL);
  }

  return result;
};

module.exports = zip;
