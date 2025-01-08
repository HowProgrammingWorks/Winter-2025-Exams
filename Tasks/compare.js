'use strict';
// Compare two dictionaries

// Step 4
// Remove unnecessary for..of loop and use 'every' method instead

const compareDictionaries = (firstDict, ...otherParameters) => {
  const secondDict = otherParameters[0];
  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);

  if (firstKeys.join('-') !== secondKeys.join('-')) {
    return false;
  }

  return firstKeys.every((key) => firstDict[key] === secondDict[key]);
};

module.exports = compareDictionaries;
