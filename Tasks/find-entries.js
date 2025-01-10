'use strict';

// Step7: Delete rest operator and unused variables
// Simplify code

const find = (object, expectedValue) => {
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    if (value === expectedValue) return key;
  }
};

module.exports = find;
