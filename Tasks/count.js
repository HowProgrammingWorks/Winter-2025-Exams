// Refactor following solution
// Sum all number values in dict
'use strict';

const sumNumericValues = (sourceObj) => {
  const objectKeys = Object.keys(sourceObj);
  const total = objectKeys.reduce((accumulator, key) => {
    const value = sourceObj[key];
    return typeof value === 'number' ? accumulator + value : accumulator;
  }, 0);
  return total;
};

module.exports = sumNumericValues;

