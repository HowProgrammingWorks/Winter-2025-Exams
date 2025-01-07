// Refactor following solution
// Return an array without duplicates

// Step 2:
// Use "Array.fill"

"use strict";

const duplicate = (value, N) => {
  if (N <= 0) return [];
  else {
    const res = new Array(N).fill(value);
    return res;
  }
};

module.exports = duplicate;
