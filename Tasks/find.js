// Refactor following solution
// Find key by value

// step 5: rename variable 'name' to 'propertyValue' for clarity

'use strict';

const find = (object, ...rest) => {
  const value = rest.pop();

  for (const [key, propertyValue] of Object.entries(object)) {
    if (propertyValue === value) {
      return key;
    }
  }

  return undefined;
};

module.exports = find;
