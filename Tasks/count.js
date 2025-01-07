// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => {
  const values = Object.values(obj);
  return values.reduce((acc, current) => {
    return typeof current === 'number' ? acc + current : acc;
  }, 0);
};

module.exports = count;