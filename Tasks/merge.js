// Refactor following solution
// Merge two dictionaries

"use strict";

const merge_two_dict = (dict1, dict2) => {
  const result = {};
  for (const key in dict1) {
    result[key] = dict1[key];
  }
  for (const key in dict2) {
    result[key] = dict2[key];
  }
  return result;
};

module.exports = merge_two_dict;
