'use strict';
// Compare two dictionaries

// Step 4
// Remove unnecessary rest parameter

const compareDictionaries = (firstDict, secondDict) => {
  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);

  if (firstKeys.join('-') !== secondKeys.join('-')) {
    return false;
  }

  return firstKeys.every((key) => firstDict[key] === secondDict[key]);
};

module.exports = compareDictionaries;
