// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => {
  const values = Object.values(obj).filter((el) => typeof el === 'number');
  return values.reduce((curSum, el) => curSum + el, 0);
};

module.exports = count;
