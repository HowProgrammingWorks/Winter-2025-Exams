// Refactor following solution
// Generate int array from given range
"use strict";

const range = (...Range) => {
  let result = [];
  let [from, to] = Range;
  if (to >= from) {
    for (let i = from; i <= to; i++) {
      result[i - from] = i;
    }
  }
  return result;
};

module.exports = range;