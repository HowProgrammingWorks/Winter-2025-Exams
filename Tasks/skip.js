// Refactor following solution
// Return an remove without listed values

// Step 4. replace nested loop with .include to much optimize the code

"use strict";

const skip = (array, ...remove) => {
  const result = [];
  for (const element of array) {
    if (!remove.includes(element)) result.push(element);
  }
  return result;
};

module.exports = skip;
