// Refactor following solution
// Make nested array plane

// Step 5:
// Prefer using for...of loop instead of for loop
// Formatting

"use strict";

const plane = (arr) => {
  const res = [];

  for (const value of arr) {
    if (Array.isArray(value)) {
      res.push(...plane(value));
    } else {
      res.push(value);
    }
  }

  return res;
};

module.exports = plane;
