// Step 6
// Use the increment operator instead of `=`

'use strict';

const incNumbers = (dict) => {
  const copiedDict = { ...dict };
  for (const key in copiedDict) {
    if (typeof copiedDict[key] === 'number') {
      copiedDict[key]++;
    }
  }
  return copiedDict;
};

module.exports = incNumbers;
