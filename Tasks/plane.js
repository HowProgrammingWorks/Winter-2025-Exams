// Refactor following solution
// Make nested array plane

"use strict";

const const_plane = (arr, res = []) => {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value, typeof value) && [i, length]) {
      res.push(...const_plane(value));
    } else {
      res.push(value);
    };
  };
  return res;
};

module.exports = const_plane;
