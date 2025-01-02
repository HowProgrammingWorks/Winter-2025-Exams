// Refactor following solution
// Sum all numbers from an array

// Step 4. replace function definition with arrow func declaration

"use strict";

const sum = (array) => {
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
