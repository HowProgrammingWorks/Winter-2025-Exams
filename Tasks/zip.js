// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (a = [], b = []) => {
  if (!a.length || !b.length) return []; // ранній вихід для порожніх масивів

  const minLength = Math.min(a.length, b.length);
  const result = [];

  for (let i = 0; i < minLength; i++) {
    result.push([a[i], b[i]]);
  }

  return result;
};

module.exports = zip;
