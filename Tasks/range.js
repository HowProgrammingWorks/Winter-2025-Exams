// Refactor following solution
// Generate int array from given range

"use strict";

const generateIntRange = (start, end) => {
  const rangeLength = end - start + 1;
  if (rangeLength <= 0) return [];
  const result = new Array(rangeLength);
  for (let i = 0; i < rangeLength; i++) {
    result[i] = start + i;
  };
  return result;
};

module.exports = generateIntRange;
