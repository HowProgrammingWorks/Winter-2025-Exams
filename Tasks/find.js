// Refactor following solution
// Find key by value

// Step 7
// Rename function

'use strict';

const findKey = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) return key;
  }
  return undefined;
};

module.exports = findKey;
