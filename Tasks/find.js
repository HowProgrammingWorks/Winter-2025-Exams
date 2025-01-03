// Refactor following solution
// Find key by value

// Step 2
// Remove empty block

'use strict';

find = (object, value) => {
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
