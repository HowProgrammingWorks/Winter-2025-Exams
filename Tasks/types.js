// Refactor following solution
// Count types in an array
'use strict'

function types(s) {
  types = {
    number: 0,
    string: 0,
    boolean: 0
  };
  for (const i of s) {
    const t = typeof i;
    types[t]++;
  }
  return types;
};

module.exports = types;
