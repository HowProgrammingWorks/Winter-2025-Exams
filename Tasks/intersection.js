// Refactor following solution
// Find an intersection of two dictionaries

"use strict";

const intersection = (dict1, dict2) => {
  const result = {}
  for (const key of Object.keys(dict1)) {
    if (dict1[key] === dict2[key]) {
      result[key] = dict1[key];
    } 
  }
  return result;
};

module.exports = intersection;
