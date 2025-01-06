// Refactor following solution
// Return an array without duplicates
"use strict";

const distinct = (data) => {
  const set = new Set(data);
  const result = Array.from(set);
  return result;
};

module.exports = distinct;