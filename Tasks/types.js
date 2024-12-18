// Refactor following solution
// Count types in an array

"use strict";

const counterTypes = function (arr) {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const el of arr) {
    const type = typeof el;
    types[type]++;
  };
  return types;
};

module.exports = counterTypes;
