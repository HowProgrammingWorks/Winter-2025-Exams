// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => {
  let sum = 0;

  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  }
  return sum;
};

module.exports = count;
//Object.keys(obj).reduce((sum, value) => typeof obj[value] === 'number' ? sum + obj[value] : sum, 0);