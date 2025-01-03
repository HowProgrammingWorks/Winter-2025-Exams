// Refactor following solution
// Find key by value

// Step 6
// Add `const`

'use strict';

const find = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) return key;
  }
  return undefined;
};

module.exports = find;
