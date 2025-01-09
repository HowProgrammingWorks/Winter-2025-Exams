// Refactor following solution
// Compare two dictionaries

"use strict";

const compare = (dict1, dict2) => {
  const keys1 = Object.keys(dict1);
  const keys2 = Object.keys(dict2);
  if (keys1.length === keys2.length) {
    if (keys1.toString() === keys2.toString()) {
      const values1 = Object.values(dict1);
      const values2 = Object.values(dict2);
      return values1.toString() === values2.toString();
    };
  };
  return false;
};

module.exports = compare;