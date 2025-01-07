// Refactor following solution
// Find key by value

'use strict'

const findInObject = (object, checkValues) => {
  const pairsKeyValue = Object.entries(object)
  const foundElement = pairsKeyValue.find(element => element[1] === checkValues)
  return foundElement !== -1 ? foundElement[0] : undefined;
};

module.exports = findInObject;
