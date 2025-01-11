'use strict';

// Refactor following solution
// Increment all numbers in dictionary

const incrementNumbers = (obj) => {
  const objKeys = Object.keys(obj);

  for (const key of objKeys) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] + 1;
    }
  }
  return obj;
};

module.exports = incrementNumbers;
