"use strict";

// Sums up all numbers from an array
const sum = (arr) => {
  let sum = 0;

  for (const item of arr) {
    if (typeof item === "number") {
      sum += item;
    }
  }

  return sum;
};

module.exports = sum;
