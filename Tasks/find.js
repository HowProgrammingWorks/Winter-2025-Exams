'use strict';
// Find key by value

// Step 6
// Improve identifiers naming

const findKey = (object, value) => {
  for (const key in object) {
    if (object[key] !== value) {
    } else {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
