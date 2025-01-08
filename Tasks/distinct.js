// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const uniqueVAlues = new Set();
  const result = [];

  for (const item of data) {
    if (!uniqueVAlues.has(item)) {
      uniqueVAlues.add(item);
      result.push(item);
    }
  };
  return result.filter((x) => typeof x === 'number');
};

module.exports = distinct;
