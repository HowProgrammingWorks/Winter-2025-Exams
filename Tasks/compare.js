'use strict';
// Compare two dictionaries

// Step 3
// Improve identifiers naming

const compareDictionaries = (firstDict, ...otherParameters) => {
  const secondDict = otherParameters[0];
  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;

  let isEqual = true;
  for (const key of firstKeys) {
    isEqual = isEqual && firstDict[key] === secondDict[key];
  }
  return isEqual;
};

module.exports = compareDictionaries;
