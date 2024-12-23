// Refactor following solution
// Count types in an array

"use strict";

const counterOfTypes = (arr) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of arr) {
    const type = typeof element;
    types[type]++;
  };
  return types;
};

module.exports = counterOfTypes;
