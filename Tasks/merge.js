// Refactor following solution
// Merge two dictionaries

"use strict";

const mergeTwoDict = (dict1, dict2) => {
  const result = {};
  for (const key of Object.keys(dict1)) {
    result[key] = dict1[key];
  }
  for (const key of Object.keys(dict2)) {
    result[key] = dict2[key];
  }
  return result;
};

module.exports = mergeTwoDict;
