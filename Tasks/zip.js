// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
"use strict";

const zip = (a = [], b = []) => {
  let result = [];
  let couter = Math.min(a.length, b.length);
  for(let i = 0; i < couter; i++)
    result.push([a[i], b[i]]);
  return result;
};

module.exports = zip;