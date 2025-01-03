// Refactor following solution
// Find key by value

// Step 1
// Add 'use strict'
// Rewrite function find parameters

'use strict';

find = (object, value) => {
  [];
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
