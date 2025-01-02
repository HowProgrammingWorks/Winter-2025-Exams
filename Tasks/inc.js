// Refactor following solution
// Increment all numbers in dictionary

"use strict";

const incNumbers = (object, ...restValue) => {
  for (const key in object) {
    if ((typeof object[key]).charAt(0).toUpperCase() === "N") {
      object[key] = object[key] + 1;
    };
  };
  return object;
};

module.exports = incNumbers;
