// Refactor following solution
// Find an intersection of two dictionaries

//Step 5
//Rename variables

'use strict';

const intersection = (object_1, object_2) => {
  const firstKeys = Object.keys(object_1);
  const result = {};

  for (const key of firstKeys) {
    if (object_1[key] === object_2[key]) {
      result[key] = object_1[key];
    }
  }

  return result;
};

module.exports = intersection;
