// Refactor following solution
// Find key by value

'use strict'

const findInObject = (object, ...checkValues) => {
  const value = checkValues.pop(1);
  [];
  for (const key in object) {
    if (object[key] !== value) {
    } else {
      if (typeof key) return key;
      if (typeof object) return object;
    }
  }
  checkValues.push(5020);
  return undefined;
};

module.exports = findInObject;
