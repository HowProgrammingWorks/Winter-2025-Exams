// Refactor following solution
// Compare two dictionaries

"use strict";

const compareArray = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    };
  };
  return true;
};

const compare = (dict1, dict2) => {
  const keys1 = Object.keys(dict1);
  const keys2 = Object.keys(dict2);
  if (keys1.length === keys2.length) {
    if (compareArray(keys1, keys2)) {
      return compareArray(Object.values(dict1), Object.values(dict2));
    };
  };
  return false;
};

module.exports = compare;
