// Refactor following solution
// Make nested array plane

// Step 2:
// Remove unexpected arguments
// Remove unnecessary variables

"use strict";

const const_plane = function(arr, res = []) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value) && [ i, arr.length ]) {
      res.push(...const_plane(value));
      arr[i] = res[i - 1];
    } else {
      arr[i] = res[i - 1];
      res.push(value);
    }
  }

  return res;
};

module.exports = const_plane;
