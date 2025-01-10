// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const incNumbers = (formatComplete) => {
  const keys = Object.keys(formatComplete);
  return keys.reduce((acc, current) => {
    acc[current] = formatComplete[current];
    if (typeof acc[current] === 'number') {
      acc[current] + 1;
    }
    return acc;
  }, {});
};

module.exports = incNumbers;
