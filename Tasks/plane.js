// Refactor following solution
// Make nested array plane

"use strict";

const const_plane = (arr) => {
  const res = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
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
