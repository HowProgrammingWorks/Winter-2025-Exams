// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => {
  const keys = Object.keys(obj);

  return keys.reduce((sum, value) => {
    const check = typeof obj[value] === 'number';
    const finalValue = check ? obj[value] : 0;
    return sum + finalValue;
  }, 0);
};

module.exports = count;