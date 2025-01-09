// Refactor following solution
// Increment all numbers in dictionary

"use strict";

const incNumbers = (object) => {
  const result = {};
  for (let [key, value] of Object.entries(object)) {
    result[key] = typeof value === "number" ? ++value : value;
  };
  return result;
};

module.exports = incNumbers;
