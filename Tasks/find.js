'use strict';
// Find key by value

// Step 3
// Add const

const find = (object, ...rest) => {
  const value = rest.pop(1);
  for (name in object) {
    if (object[name] !== value) {
    } else {
      return name;
    }
  }
  return undefined;
};

module.exports = find;
