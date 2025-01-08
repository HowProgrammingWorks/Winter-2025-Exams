// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const incNumbers = (dictionary, ...restVariables) => {
  const result = { ...dictionary };
  for (const key in result) {
    if (typeof result[key] === 'number') {
      result [key] += 1;
    }
  }
  
  return result;
};

module.exports = incNumbers;
