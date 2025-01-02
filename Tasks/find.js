'use strict';

// Step7: Delete rest operator and unused variables
// Simplify code

const find = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) return key;
  }
};

module.exports = find;
