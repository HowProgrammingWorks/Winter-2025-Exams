// Refactor following solution
// Generate random integer value in given range

// Step 4: on max undefined 0 is assigned to min to unify the returns

'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = random;
