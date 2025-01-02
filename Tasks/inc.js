// Refactor following solution
// Increment all numbers in dictionary

"use strict";

const incNumbers = (object) => {
  const result = {};
  for (let [key, value] of Object.entries(object)) {
    typeof value === "number" ? (result[key] = ++value) : (result[key] = value);
  };
  return result;
};

module.exports = incNumbers;
