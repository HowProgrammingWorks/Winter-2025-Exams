// Refactor following solution
// Find key by value

// Step 5
// Change if and remove useless else if

'use strict';

find = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) return key;
  }
  return undefined;
};

module.exports = find;
