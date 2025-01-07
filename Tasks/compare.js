// Refactor following solution
// Compare two dictionaries

'use strict';

const compare = (firstDict, ...otherDicts) => {
  const firstDictKeys = Object.keys(firstDict);
  for (const dict of otherDicts) {
    const dictKeys = Object.keys(dict);
    if (firstDictKeys.join("-") !== dictKeys.join("-")) return false;
    for (const key of firstDictKeys) {
      if (firstDict[key] !== dict[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = compare;
