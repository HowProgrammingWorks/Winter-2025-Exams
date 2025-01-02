// Refactor following solution
// Sum all numbers from an array

// Step 6. replace for...of-loop with .reduce

"use strict";

const sum = (array) =>
  array.reduce(
    (total, element) => total + (typeof element === "number" ? element : 0),
    0,
  );

module.exports = sum;
