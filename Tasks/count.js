// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => {
  const values = Object.values(obj);
  return values.reduce(
    (curSum, el) => (typeof el === 'number' ? curSum + el : curSum),
    0,
  );
};

module.exports = count;
