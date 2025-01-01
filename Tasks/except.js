// Refactor following solution
// Copy all values from dict except listed

// Step 5. add intermediate variable to avoid mutating input parameter

"use strict";

const except = (obj, ...exceptions) => {
  const keys = Object.keys(obj);
  const result = {};
  keys.forEach((key) => {
    if (!exceptions.includes(key)) result[key] = obj[key];
  });
  return result;
};

module.exports = except;
