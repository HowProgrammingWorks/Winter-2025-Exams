'use strict';
// Find key by value

// Step 7
// Simplify if..else branching

const findKey = (object, value) => {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
