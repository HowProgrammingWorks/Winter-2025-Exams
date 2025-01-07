// Refactor following solution
// Generate random integer value in given range
'use strict';

Random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = Random;
