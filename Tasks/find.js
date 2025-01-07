// Refactor following solution
// Find key by value

'use strict'

const find = (object, ...rest) => {
  const value = rest.pop();

  for (const [name, objValue] of Object.entries(object)) {
    if (objValue === value) {
      return name;
    }
  }
  
};

module.exports = find;
