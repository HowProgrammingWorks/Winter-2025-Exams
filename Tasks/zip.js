"use strict";

// Zips two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
const zip = (a = [], b = []) => {
  const length = Math.min(a.length, b.length);
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push([a[i], b[i]]);
  }

  return result;
};

module.exports = zip;
