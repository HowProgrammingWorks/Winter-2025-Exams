// Refactor following solution
// Generate random integer value in given range

// Step 3
// Change if logic

'use strict';

const Random = (min, max = min) => {
  if (min === max) return min;
  else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = Random;
