// Refactor following solution
// Return an array without duplicates

// Step 1:
// Use "use strict"
// Use const

"use strict";

const duplicate = (value, N) => {
  if (N <= 0) return [];
  else {
    const res = [];
    for (let i = 0; i < N; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = duplicate;
