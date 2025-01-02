// Refactor following solution
// Sum all numbers from an array

// Step 2. remove unnecessary consts and parts of code;
// rename some variables to run tests

"use strict";

const sum = function (s) {
  const result = [0];
  for (const i of s) {
    if (typeof i === "number") {
      if (result.length > 0) {
        const new_Sum = result[result.length - 1] + i;
        result.push(new_Sum);
      }
    }
  }
  return result[result.length - 1];
};

module.exports = sum;
