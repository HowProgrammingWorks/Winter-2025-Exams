// Step 5
// Simplify the `typeof` condition by removing unnecessary string methods

'use strict';

const incNumbers = (dict) => {
  const copiedDict = { ...dict };
  for (const key in copiedDict) {
    if (typeof copiedDict[key] === 'number') {
      copiedDict[key] = copiedDict[key] + 1;
    }
  }
  return copiedDict;
};

module.exports = incNumbers;
