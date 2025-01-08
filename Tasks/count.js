// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) =>
  Object.values(obj).reduce(
    (curSum, el) => (typeof el === 'number' ? curSum + el : curSum),
    0,
  );

module.exports = count;
