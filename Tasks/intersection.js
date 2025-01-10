// Refactor following solution
// Find an intersection of two dictionaries

//Step 6
//Use camelCase naming

'use strict';

const intersection = (object1, object2) => {
  const firstKeys = Object.keys(object1);
  const result = {};

  for (const key of firstKeys) {
    if (object1[key] === object2[key]) {
      result[key] = object1[key];
    }
  }

  return result;
}

module.exports = intersection;
