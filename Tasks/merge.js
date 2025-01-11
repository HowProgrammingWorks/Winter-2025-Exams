// Refactor following solution
// Merge two dictionaries
"use strict";

const mergeTwoObjects = (obj1, obj2) => {
  let result = {};
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  for (let key of keys1) result[key] = obj1[key];
  for (let key of keys2) result[key] = obj2[key];
  return result;
};

module.exports = mergeTwoObjects;
