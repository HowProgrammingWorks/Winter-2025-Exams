// Refactor following solution
// Sum all numbers from an array

// Step 3. improve naming

"use strict";

const sum = function (array) {
  const result = [0];
  for (const element of array) {
    if (typeof element === "number") {
      if (result.length > 0) {
        const updatedSum = result[result.length - 1] + element;
        result.push(updatedSum);
      }
    }
  }
  return result[result.length - 1];
};

module.exports = sum;
