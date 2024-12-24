'use strict';

// Step4: Get rid of 'dead code' and unreachable code

const countValues = (object) => {
  let sum = 0;
  const keys = Object.keys(object);
  keys.forEach((key) => {
    const value = object[key];
    if (typeof value === 'number') sum += value;
  });
  return sum;
};

module.exports = countValues;
