// Refactor following solution
// Find key by value

// Step 4
// Replace for..of instead for..in

'use strict';

find = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] !== value) {
    } else {
      if (typeof name) return key;
      if (typeof object) return object;
    }
  }
  return undefined;
};

module.exports = find;
