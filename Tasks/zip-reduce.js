// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (arr1 = [], arr2 = []) =>
  arr2
    .reduce((acc, el) => [...acc, [arr1[arr2.indexOf(el)], el]], [])
    .filter((pair) => pair[0] !== undefined);

module.exports = zip;
