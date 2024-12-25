// Refactor following solution
// Increment all numbers in dictionary
"use strict";

let inc_numbers = (dict) => {
  for (const key in dict) {
    if (typeof dict[key] === "number") {
      dict[key] += 1;
    }
  }
  return dict;
};

module.exports = inc_numbers;
