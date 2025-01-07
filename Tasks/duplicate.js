// Refactor following solution
// Return an array without duplicates
'use strict';

const duplicate = (value, count) => {
  if (count <= 0) return [];
  else {
    return Array(count).fill(value);
  }
}

module.exports = duplicate;
