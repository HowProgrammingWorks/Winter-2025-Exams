// Refactor following solution
// Find an intersection of two dictionaries
'use strict'

function intersection(object1, object2) {
  let firstKeys = Object.keys(object1);
  for (let attributeName of firstKeys) {
    if ( object1[attributeName] === object2[attributeName]) {
      object2[attributeName] = object1[attributeName];
    } else {
      delete object1[attributeName];
    }
  }
  return object1;
};

module.exports = intersection;
