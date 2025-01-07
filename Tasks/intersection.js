// Refactor following solution
// Find an intersection of two dictionaries
'use strict'
function intersection(object_1, object_2) {
  let firstKeys = Object.keys(object_1);
  for (let attributeName of firstKeys) {
    if (object_1[attributeName] === object_2[attributeName]) {
      object_2[attributeName] = object_1[attributeName];
    } else {
      delete object_1[attributeName];
    }
  }
  return object_1;
};

module.exports = intersection;
