// Refactor following solution
// Find key by value

'use strict'

const findInObject = (object, checkValues) => {
  const keys = Object.keys(object)
  const values = Object.values(object)
  const foundIndex = values.findIndex(element => element === checkValues)
  return foundIndex !== -1 ? keys[foundIndex] : undefined;
};

module.exports = findInObject;
