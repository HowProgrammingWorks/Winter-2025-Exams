// Refactor following solution
// Count types in an array
"use strict";

const types = (arr) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (let element of arr) 
    ++types[typeof element];
  return types;
};

module.exports = types;
