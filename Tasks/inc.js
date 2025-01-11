// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const incNumbers = (obj) => {
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'number') {obj[key]++}
  }
  return obj
}

module.exports = incNumbers;
