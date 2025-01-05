// Step 7
// Improve iteration by using `Object.keys` method
// Replace `for...in` for `for...of`

'use strict';

const incNumbers = (dict) => {
  const copiedDict = { ...dict };
  const keys = Object.keys(copiedDict);
  for (const key of keys) {
    if (typeof copiedDict[key] === 'number') {
      copiedDict[key]++;
    }
  }
  return copiedDict;
};

module.exports = incNumbers;
