// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (arr1 = [], arr2 = []) => {
  const zipped = [];
  for (const element of arr2) {
    const index = arr2.indexOf(element);
    const cell = [arr1[index], element];
    zipped[index] = cell;
    if (cell[0] === undefined) zipped.length -= 1;
  }
  return zipped;
};

module.exports = zip;
