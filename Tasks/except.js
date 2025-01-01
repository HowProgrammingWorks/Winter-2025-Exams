// Refactor following solution
// Copy all values from dict except listed

// Step 4. remove unused parts

"use strict";

const except = (obj, ...exceptions) => {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (exceptions.includes(key)) delete obj[key];
  });
  return obj;
};

module.exports = except;
