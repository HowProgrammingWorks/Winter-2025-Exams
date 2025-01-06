// Refactor following solution
// Count types in an array

// Step 5: removed unnecessary intermediate variable, done

'use strict';

const types = (arr) => {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const elem of arr) {
    result[typeof elem]++;
  }
  return result;
};

module.exports = types;
