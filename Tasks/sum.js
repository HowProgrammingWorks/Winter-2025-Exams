// Refactor following solution
// Sum all numbers from an array

// Step 5. rewrite program's logic to better understanding

"use strict";

const sum = (array) => {
  let result = 0;
  for (const element of array) {
    if (typeof element === "number") result += element;
  }
  return result;
};

module.exports = sum;
