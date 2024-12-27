// Increment all numbers in dictionary

'use strict';

const incNumbers = (dict) => {
  const incDict = { ...dict };
  for (const item in incDict) {
    if ((typeof incDict[item]).charAt(0).toUpperCase() === 'N') {
      incDict[item] = incDict[item] + 1;
    }
  }
  return incDict;
};

module.exports = incNumbers;
