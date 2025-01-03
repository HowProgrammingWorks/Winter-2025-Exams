// Refactor following solution
// Generate random integer value in given range

// Step 2
// remove useless condition
// rewrite function logic

'use strict';

const Random = (min, max = min) => {
  if (min === max) return min;
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = Random;
