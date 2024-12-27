// Increment all numbers in dictionary

'use strict';

const incNumbers = (dict) => {
  const incDict = { ...dict };
  for (const item in incDict) {
    if (typeof incDict[item] === 'number') incDict[item]++;
  }
  return incDict;
};

module.exports = incNumbers;
