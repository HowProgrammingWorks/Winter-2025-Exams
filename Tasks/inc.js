// Step 4
// Rename all identifiers to camelCase

'use strict';

const incNumbers = (dict) => {
  const copiedDict = { ...dict };
  for (const key in copiedDict) {
    if ((typeof copiedDict[key]).charAt(0).toUpperCase() === 'N') {
      copiedDict[key] = copiedDict[key] + 1;
    }
  }
  return copiedDict;
};

module.exports = incNumbers;
