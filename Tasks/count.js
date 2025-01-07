// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => {
  const keys = Object.keys(obj);
  return keys.reduce((acc, current) => {
    const value = obj[current];
    return typeof value === 'number' ? acc + value : acc;
  }, 0);
};

module.exports = count;