// Refactor following solution
// Generate int array from given range

"use strict";

const intRange = (start, end) => {
  if (start > end) return [];
  const range = new Array(end - start + 1);
  for (let i = start; i <= end; i++) {
    range[i - start] = i;
  };
  return range;
};

module.exports = intRange;
