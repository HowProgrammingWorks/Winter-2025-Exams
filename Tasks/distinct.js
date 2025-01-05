"use strict";

// Refactor following solution
// Return an array without duplicates

const distinct = (data) => {
  const seen = new Set();
  return data.filter((item) => {
    if (seen.has(item)) {
      return false;
    }
    seen.add(item);
    return true;
  });
};

module.exports = distinct;
