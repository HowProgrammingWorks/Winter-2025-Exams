// Refactor following solution
// Find an intersection of two dictionaries

//Step 2
//Remove unneeded braces
//Use camel case naming convention

'use strict';

const intersection = (object_1, object_2) => {
  const firstKeys = Object.keys(object_1);

  for (const attributeName of firstKeys) {
    if (object_1[attributeName] === object_2[attributeName]) {
      object_2[attributeName] = object_1[attributeName];
    } else {
      delete object_1[attributeName];
    }
  }

  return object_1;
};

module.exports = intersection;
