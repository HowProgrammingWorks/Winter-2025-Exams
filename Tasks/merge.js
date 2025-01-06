// Refactor following solution
// Merge two dictionaries

"use strict";

const mergeObjects = (object1, object2) => {
  const result = {...object1, ...object2};
  return result;
};

module.exports = mergeObjects;
