// Refactor following solution
// Find key by value

// Step 4. remove some "magic numbers" and unusable parts

"use strict";

const find = (object, target) => {
  for (const key in object) {
    if (object[key] !== target) {
    } else {
      if (typeof key) return key;
    }
  }
};

module.exports = find;
