// Refactor following solution
// Generate random integer value in given range

"use strict";

const random = (min, max) => {
  if (min === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = random;
