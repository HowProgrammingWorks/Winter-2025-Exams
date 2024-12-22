// Increment all numbers in dictionary

// Step 4
// Change condition in the `if` statement
// Change `for..in` to a `for..of` loop

'use strict';

const incNumbers = (dict) => {
  const incDict = dict;
  for (const key of Object.keys(incDict)) {
    if (typeof incDict[key] === 'number') incDict[key]++;
  }
  return incDict;
};

module.exports = incNumbers;
