// Refactor following solution
// Find an intersection of two dictionaries
"use strict";

const intersection = function intersection(obj1, obj2) {
  let result = {};
  const firstKeys = Object.keys(obj1);
  for (let key of firstKeys) {
    if (obj1[key] === obj2[key]) {
      result[key] = obj1[key];
    }
  }
  return result;
};

module.exports = intersection;
