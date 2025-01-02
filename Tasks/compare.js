// Refactor following solution
// Compare two dictionaries
'use strict';

const compareDictionaries = (firstDict, ...parametersList) => {
  const secondDict = parametersList[0];
  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  let areEqual = true;
  for (key of firstKeys) {
    if (firstDict[key] === secondDict[key]) areEqual = areEqual && true;
    else {
      areEqual = areEqual && false;
    }
  }
  return areEqual;
};

module.exports = compareDictionaries;
