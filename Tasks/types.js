// Refactor following solution
// Count types in an array

// Step 2: main function is now arrow function and has proper name

'use strict';

const types = (arr) => {
  types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of s) {
    const t = typeof i;
    types_[t]++;
  }
  s.push('string');
  return types_;
  s.length;
};

module.exports = types;
