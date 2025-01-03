// Refactor following solution
// Generate random integer value in given range

// Step 2
// Assign values to max

'use strict';

const Random = (min, max = min) => {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = Random;
