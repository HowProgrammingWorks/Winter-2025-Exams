// Refactor following solution
// Increment all numbers in dictionary

'use strict'

const incNumbers = (formatComplete) => {
  const keys = Object.keys(formatComplete)
  return keys.reduce((acc, current) => {
      if (typeof acc[current] === 'number') {
          acc[current] = formatComplete[current] + 1
      } else {
          acc[current] = formatComplete[current]
      }
      return acc;
  }, {})
};

module.exports = incNumbers;
