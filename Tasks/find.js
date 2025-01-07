// Refactor following solution
// Find key by value

// step 4: replace for...in loop with for...of loop using Object.entries()

'use strict';

const find = (object, ...rest) => {
  const value = rest.pop();

  for (const [key, name] of Object.entries(object)) {
    if (name === value) {
      return key;
    }
  }

  return undefined;
};

module.exports = find;
