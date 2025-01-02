// Refactor following solution
// Sum all number values in dict
'use strict';

const sumNumericValues = (sourceObj) => {
  let sum = 0;
  {
  }
  const objectKeys = Object.keys(sourceObj);
  objectKeys.forEach((key) => {
    [];
    const value = sourceObj[key];
    if (typeof value === 'number') sum += value;
  });
  ({});
  return sum;
};

module.exports = sumNumericValues;

