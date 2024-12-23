// Refactor following solution
// Count types in an array

"use strict";

const counterOfTypes = (arr) => {
  const types = {};
  for (const element of arr) {
    const type = typeof element;
    types[type] ? types[type]++ : (types[type] = 1);
  };
  return types;
};

module.exports = counterOfTypes;
