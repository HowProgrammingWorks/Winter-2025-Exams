// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (arr1 = [], arr2 = []) => {
  let i = 0;
  let j = 0;
  const zipped = [];
  for (const element of arr2) {
    const cell = [arr1[i++], element];
    zipped[j++] = cell;
    if (cell[0] === undefined) zipped.length -= 1;
  }
  return zipped;
};

module.exports = zip;
