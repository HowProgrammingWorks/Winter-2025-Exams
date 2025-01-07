// Refactor following solution
// Compare two dictionaries

// Step 2:
// Rename variables using camel case

"use strict";

const compare = (object1, ...objects) => {
  const object2 = objects[0];
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.join('-') !== keys2.join('-')) return false;
  let isEqual = true;
  for (const key of keys1) {
    if (object1[key] === object2[key]) isEqual = isEqual && true;
    else {
      isEqual = isEqual && false;
    }
  }
  return isEqual;
};

module.exports = compare;
