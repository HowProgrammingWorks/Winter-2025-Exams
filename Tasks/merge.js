'use strict';
// Merge two dictionaries

// Step 5
// Improve naming

const mergeTwoObjects = (object1, object2) => {
  let mergedObject = {};
  for (const key in object1) {
    mergedObject[key] = object1[key];
  }
  for (const key in object2) {
    mergedObject[key] = object2[key];
  }
  return mergedObject;
};

module.exports = mergeTwoObjects;
