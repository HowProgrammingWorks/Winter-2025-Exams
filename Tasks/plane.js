// Refactor following solution
// Make nested array plane
'use strict';

const plane = (arr, res = []) => {
  for (const value of arr) {
    if (Array.isArray(value) && value.length) {
      res.push(...plane(value));
    } else {
      res.push(value);
    }
  }

  return res;
};

module.exports = plane;
