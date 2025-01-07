// Refactor following solution
// Find key by value

'use strict'

const findInObject = (object, checkValues) => {
  const pairsKeyValue = Object.entries(object)
  for (const pair of pairsKeyValue) {
      if (pair[1] === checkValues) return pair[0];
  }
  return undefined;
};

module.exports = findInObject;
