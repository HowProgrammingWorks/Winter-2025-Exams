// Refactor following solution
// Find key by value

// Step 3
// replace for..in with for..of

'use strict';

find = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
     else {
      if (typeof key) return key;
      if (typeof object) return object;
    }
  }
  return undefined;
};

module.exports = find;
