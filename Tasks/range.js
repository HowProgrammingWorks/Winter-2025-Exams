// Refactor following solution
// Generate int array from given range

"use strict";

const intRange = (...range) => {
  const [start, end] = range;
  if (end >= start) {
    range = new Array(end - start + 1);
    for (let i = start; i <= end; i++) {
      range[i - start] = i;
    };
  } else {
    return [];
  };
  return range;
};

module.exports = intRange;
