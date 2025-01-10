// Increment all numbers in dictionary

'use strict';

const incNumbers = (dict) => {
  const incDict = { ...dict };
  for (const key of Object.keys(incDict)) {
    if (typeof incDict[key] === 'number') incDict[key]++;
  }
  return incDict;
};

module.exports = incNumbers;
