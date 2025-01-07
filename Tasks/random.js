// Refactor following solution
// Generate random integer value in given range

// Step 5: entire if block is replaced by nullish coalescing, done

'use strict';

const random = (min, max) => {
  max ?? (max = min, min = 0);
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = random;
