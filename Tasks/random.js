// Refactor following solution
// Generate random integer value in given range

// Step 1
// add use strict
// add const

'use strict';

const Random = (min, max) => {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = Random;
