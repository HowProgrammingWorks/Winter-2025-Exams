// Refactor following solution
// Find key by value

'use strict'

const findInObject = (object, checkValues) => {
  for (const key in object) {
      if (object[key] === checkValues) return key;
  }
  return undefined;
};

module.exports = findInObject;
