'use strict';
// Merge two dictionaries

// Step 6
// Prefer for..of instead for..in

const mergeTwoObjects = (object1, object2) => {
  let mergedObject = {};
  for (const key of Object.keys(object1)) {
    mergedObject[key] = object1[key];
  }
  for (const key of Object.keys(object2)) {
    mergedObject[key] = object2[key];
  }
  return mergedObject;
};

module.exports = mergeTwoObjects;
