// Refactor following solution
// Find key by value

'use strict'

const find = (object, ...rest) => {
  const value = rest.pop();
  
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      return name;
    }
  }
  return undefined;
};

module.exports = find;
