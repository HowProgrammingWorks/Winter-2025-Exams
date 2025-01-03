// Refactor following solution
// Find key by value

// Step 3
// Add variable keys

'use strict';

find = (object, value) => {
  const keys = Object.keys(object);
  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  return undefined;
};

module.exports = find;
