// Step 5
// Improve iteration
// Remove the `sum` variable
// Use reduce method

'use strict';

const sumNums = (obj) => {
  const values = Object.values(obj);
  const fn = (acc, value) => {
    if (typeof value === 'number') acc += value;
    return acc;
  };
  return values.reduce(fn, 0);
};

module.exports = sumNums;
