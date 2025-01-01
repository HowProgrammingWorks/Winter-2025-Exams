// Refactor following solution
// Copy all values from dict except listed

// Step 6. replace forEach-loop with .fromEntries to optimize code style

"use strict";

const except = (obj, ...exceptions) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !exceptions.includes(key)),
  );
};

module.exports = except;
