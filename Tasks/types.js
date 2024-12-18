// Refactor following solution
// Count types in an array

"use strict";

const types = {
  number: 0,
  string: 0,
  boolean: 0,
};

const counterTypes = function (arr) {
  for (const el of arr) {
    const type = typeof el;
    types[type]++;
  };
  return types;
};

module.exports = counterTypes;
