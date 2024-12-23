// Refactor following solution
// Count words in a string

"use strict";

const counterOfWords = (str) => {
  return str.split(" ").filter((word) => word !== "").length;
};

module.exports = counterOfWords;
