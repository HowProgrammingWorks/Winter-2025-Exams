// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const incNumbers = (dictionary) => {
  const result = { ...dictionary };

  for (const key of Object.keys(result)) {
    if (typeof result[key] === 'number') {
      result[key] += 1;
    }
  }

  return result;
};

module.exports = incNumbers;
