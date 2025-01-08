// step4
// use Object.values i reduce
// use  Conditional operator

'use strict';

const count = (obj) =>
  Object.values(obj).reduce(
    (sum, value) => (typeof value === 'number' ? (sum += value) : sum),
    0,
  );

module.exports = count;
