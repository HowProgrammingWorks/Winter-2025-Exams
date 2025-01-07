// Refactor following solution
// Return an array without duplicates
'use strict';

const duplicate = (value, count) => {
  if (count <= 0) return [];
  else {
    const res = [];
    for (let i = 0; i < count; i++) {
      res.push(value);
    }
    return res;
  }
};

module.exports = duplicate;
