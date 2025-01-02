// Refactor following solution
// Compare two dictionaries
'use strict';

const compareDictionaries = (firstDict, ...parametersList) => {
  const secondDict = parametersList[0];
  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);

  if (firstKeys.length !== secondKeys.length) return false;

  for (const key of firstKeys) {
    if (firstDict[key] !== secondDict[key]) {
      return false;
    }
  }

  return true;
};

module.exports = compareDictionaries;
