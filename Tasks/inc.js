// Refactor following solution
// Increment all numbers in dictionary

"use strict";

const incNumbers = (object) => {
  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "number") object[key]++;
  };
  return object;
};

module.exports = incNumbers;
