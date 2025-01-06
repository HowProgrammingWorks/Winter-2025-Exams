// Step 2
// Remove `j` declaration and using
// Remove unnecessary `[i, length]` condition
// Simplify conditions by removing `arr[i]` initialization
// Remove `typeof value` from parameters of `.isArray()`

'use strict';

const const_plane = function (arr, res = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      res.push(...const_plane(value));
    } else {
      res.push(value);
    }
  }
  return res;
};

module.exports = const_plane;
