// Refactor following solution
// Find an intersection of two dictionaries

//Step 4
//Declare a new variable to prevent mutation

'use strict';

const intersection = (object_1, object_2) => {
  const firstKeys = Object.keys(object_1);
  const result = {};

  for (const attributeName of firstKeys) {
    if (object_1[attributeName] === object_2[attributeName]) {
      result[attributeName] = object_1[attributeName];
    }
  }

  return result;
};

module.exports = intersection;
