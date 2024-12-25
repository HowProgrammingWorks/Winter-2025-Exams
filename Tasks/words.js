// Refactor following solution
// Count words in a string

"use strict"

const words = (str) => {
  return str
    .split(" ")
    .filter((word) => word !== "")
    .reduce((result, current) => result + 1, 0)
};

module.exports = words;
