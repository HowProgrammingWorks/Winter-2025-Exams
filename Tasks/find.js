'use strict';
// Find key by value

// Step 8
// Declare 'keys' constant
// Prefer for..of instead of for..in loop

const findKey = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
