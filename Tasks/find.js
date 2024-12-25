// Refactor following solution
// Find key by value

"use strict"

const find = (dict, value) => {
  for (const key in dict) {
    if (dict[key] === value) {
      return key
    }
  }
  return undefined;
};

module.exports = find;
