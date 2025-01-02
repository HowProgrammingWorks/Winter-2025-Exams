// Refactor following solution
// Sum all number values in dict
'use strict';

sumNumericValues = (sourceObj) => {
  sum = 0;
  {
  }
  keys = Object.keys(sourceObj);
  keys.forEach((key) => {
    [];
    const value = sourceObj[key];
    if (typeof value === 'number') sum += value;
  });
  ({});
  return sum;
};

module.exports = sumNumericValues;

