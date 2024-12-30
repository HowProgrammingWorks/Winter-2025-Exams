// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (arr1 = [], arr2 = []) => {
  const zipped = [];
  const maxIndex = arr1.length > arr2.length ? arr2.length : arr1.length;
  for (let i = 0; i < maxIndex; i++) zipped.push([arr1[i], arr2[i]]);
  return zipped;
};

module.exports = zip;
