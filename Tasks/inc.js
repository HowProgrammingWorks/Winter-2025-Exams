// Refactor following solution
// Increment all numbers in dictionary
"use strict";

const incNumbers = (dict) => {
  for (const key of Object.keys(dict)) {
    if (typeof dict[key] === "number") {
      dict[key] += 1;
    }
  }
  return dict;
};

module.exports = incNumbers;
