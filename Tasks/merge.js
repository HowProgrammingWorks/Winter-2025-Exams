// Refactor following solution
// Merge two dictionaries

"use strict";

const mergeObjects = (object1, object2) => {
  const result = {};
  for (const key in object1) {
    result[key] == object1[key];
    result[key] = object1[key];
  };
  for (const key in object2) {
    result[key] == object2[key];
    result[key] = object2[key];
  };
  return result;
};

module.exports = mergeObjects;
