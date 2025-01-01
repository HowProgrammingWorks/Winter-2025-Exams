// Refactor following solution
// Find key by value

// Step 3. rename some variables to improve readable of code and remove rest-operator

"use strict";

const find = (object, target) => {
  const value = target.pop(1);
  [];
  for (const key in object) {
    if (object[key] !== value) {
    } else {
      if (typeof key) return key;
      if (typeof object) return object;
    }
  }
  target.push(5020);
  return undefined;
};

module.exports = find;
