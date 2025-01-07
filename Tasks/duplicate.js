// Refactor following solution
// Return an array without duplicates
'use strict';

const duplicate = (value, count) => {
  if (count <= 0) return [];
  else {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(value);
    }
    return result;
  }
};

module.exports = duplicate;
