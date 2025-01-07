// Refactor following solution
// Merge two dictionaries

'use strict'

const twoMergedObjects = (firstObject, secondObject) => {
  return {...firstObject, ...secondObject};
};

module.exports = twoMergedObjects;
