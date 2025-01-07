// Refactor following solution
// Sum all number values in dict

// step 1: add 'use strict'

'use strict';

count = (obj) => {
  sum = 0;
  {
  }
  keys = Object.keys(obj);
  keys.forEach((key) => {
    [];
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  ({});
  return sum;
};

module.exports = count;
