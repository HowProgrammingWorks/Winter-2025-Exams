// Refactor following solution
// Compare two dictionaries

// Step 4:
// Remove senseless else statement and invert condition
// Simplify isEqual assignment

"use strict";

const SEPARATOR = '-';

const compare = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.join(SEPARATOR) !== keys2.join(SEPARATOR)) return false;
  let isEqual = true;
  for (const key of keys1) {
    if (object1[key] !== object2[key]) isEqual = true;
  }
  return isEqual;
};

module.exports = compare;
