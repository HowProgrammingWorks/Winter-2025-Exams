'use strict';
// Find key by value

// Step 5
// Rename rest parameter 'rest' to 'value'

const find = (object, value) => {
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      return name;
    }
  }
  return undefined;
};

module.exports = find;
