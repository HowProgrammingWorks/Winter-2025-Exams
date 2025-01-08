// Refactor following solution
// Shuffle an array
"use strict";

const shuffle = (arr) => {
  let result = arr;
  result.sort(() => Math.random() - 0.5);
  return result;
};

module.exports = shuffle;