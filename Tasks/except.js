// Refactor following solution
// Copy all values from dict except listed

// Step 7. using suggestions replace destructuring in filter method for better optimization

'use strict';

const except = (obj, ...exceptions) => {
  return Object.fromEntries(
    Object.entries(obj).filter((entry) => !exceptions.includes(entry[0])),
  );
};

module.exports = except;
