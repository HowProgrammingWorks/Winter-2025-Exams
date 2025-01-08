// Refactor following solution
// Find a difference between two dictionaries

'use strict';
const difference = function difference(firstObject, secondObject) {
  for (const key in secondObject) {
    firstObject[key] = secondObject[key];
    delete firstObject[key];
  }
  return firstObject;
};

module.exports = difference;
