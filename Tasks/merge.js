// Refactor following solution
// Merge two dictionaries

'use strict'

const twoMergedObjects = (firstObject, secondObject) => {
  const resultObject = {};
  for (const attributeName in firstObject) {
    resultObject[attributeName] = firstObject[attributeName];
  }
  for (const attributeName in secondObject) {
    resultObject[attributeName] = secondObject[attributeName];
  }
  return resultObject;
};

module.exports = twoMergedObjects;
