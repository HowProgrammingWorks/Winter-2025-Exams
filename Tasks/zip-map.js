// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (arr1 = [], arr2 = []) =>
  arr2
    .map((element, index) => [arr1[index], element])
    .filter((pair) => pair[0] !== undefined);

module.exports = zip;
