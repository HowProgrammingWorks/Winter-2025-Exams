// Refactor following solution
// Compare two dictionaries

'use strict'

const compare = (firstDict, secondDict) => {
    const firstDictKeys = Object.keys(firstDict);
    const secondDictKeys = Object.keys(secondDict);
    if (firstDictKeys.join('-') !== secondDictKeys.join('-')) return false;
    for (const key of firstDictKeys) {
      if (firstDict[key] !== secondDict[key]) {
        return false;
      };
    }
    return true;
  };
  
  module.exports = compare;
