'use strict'


// Refactor following solution
// Return an array without duplicates

const duplicate = (data, length) => {
  if (length <= 0) return [];
  else {
  const res = [];
    for (let i = 0; i < length; i++) {
      res[i] = data;
    }
    return res;
  }
};

module.exports = duplicate;
