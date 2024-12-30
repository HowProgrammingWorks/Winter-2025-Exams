// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (arr1 = [], arr2 = []) => {
  const zipped = [];
  for (let i = 0; i < arr2.length; i++) {
    const cell = [arr1[i], arr2[i]];
    if (cell[0] !== undefined) zipped.push(cell);
  }
  return zipped;
};

module.exports = zip;
