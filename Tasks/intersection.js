// Refactor following solution
// Find an intersection of two dictionaries
'use strict'
function intersection(object_1, object_2) {
  let firstKeys = Object.keys(object_1);
  for (attributeName of firstKeys) {
    if (object_1[attributeName] === object_2[attributeName]) {
      object_2[attributeName] = object_1[attributeName];
    } else {
      delete object_1[attribute_name];
    }
  }
  return object_1;
};

module.exports = intersection;
