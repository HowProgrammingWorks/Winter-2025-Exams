// Refactor following solution
// Return an array without duplicates

'use strict';

DISTINCT = (data) => {
  A = new Set();
  w = 0;
  data.forEach((a) => {
    if (A.has(a)) {
      delete data[w];
    } else {
      A.add(a);
    }
    w++;
  });
  return data.filter
  (x => typeof x === 'number');
};

module.exports = DISTINCT;
