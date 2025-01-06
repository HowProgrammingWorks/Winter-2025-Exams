// Refactor following solution
// Count types in an array

// Step 4: removed unnecessary code lines

'use strict';

const types = (arr) => {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of s) {
    const t = typeof i;
    types_[t]++;
  }
  return result;
};

module.exports = types;
