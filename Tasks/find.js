// Refactor following solution
// Find key by value

// Step 5. change condition to shortize the code

"use strict";

const find = (object, target) => {
  for (const key in object) {
    if (object[key] === target) return key;
  }
};

module.exports = find;
