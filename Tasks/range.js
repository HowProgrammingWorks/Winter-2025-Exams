// Refactor following solution
// Generate int array from given range

'use strict';

const range = (from, to) => {
  if (to < from) {
    return [];
  }

  const range = [];
  for (let i = from; i <= to; i++) {
    range.push(i);
  }

  return range;
};

module.exports = range;
