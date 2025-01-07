// Refactor following solution
// Find key by value

// step 3: remove unnecessary code block

'use strict';

const find = (object, ...rest) => {
  const value = rest.pop();

  for (const name in object) {
    if (object[name] === value) {
      return name;
    }
  }

  return undefined;
};

module.exports = find;
