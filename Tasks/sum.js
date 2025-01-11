// Refactor following solution
// Sum all numbers from an array
"use strict";

const sum = (arr) => {
  let sum = 0;
  for (let elemet of arr) {
    if (typeof elemet === "number") {
      sum += elemet;
    }
  }
  return sum;
};

module.exports = sum;
