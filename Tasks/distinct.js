// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const uniqueVAlues = new Set();
  let index = 0;
  data.forEach((item) => {
    if (uniqueVAlues.has(item)) {
      delete data[index];
    } else {
      uniqueVAlues.add(item);
    }
    index++;
  });
  return data.filter((x) => typeof x === 'number');
};

module.exports = distinct;
