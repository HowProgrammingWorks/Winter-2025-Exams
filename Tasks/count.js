// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => {
  let sum = 0;
  for (const value of Object.values(obj)) {
    if (typeof value === 'number') sum += value;
  }
  return sum;
};

module.exports = count;
