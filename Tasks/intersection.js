// Refactor following solution
// Find an intersection of two dictionaries

'use strict'

const intersection = (firstObject, secondObject) => {
  const newObject = {};
  const firstKeys = Object.keys(firstObject);
  for (const attributeName of firstKeys) {
    if (firstObject[attributeName] === secondObject[attributeName]) {
      newObject[attributeName] = firstObject[attributeName];
    }
  }
  return newObject;
};

module.exports = intersection;
