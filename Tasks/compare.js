// Refactor following solution
// Compare two dictionaries

'use strict';

const compare = (firstDict, ...otherDicts) => {
  const firstDictKeys = Object.keys(firstDict);
  for (const dict of otherDicts) {
    const dictkeys = Object.keys(dict);
    if (firstDictKeys.join("-") !== dictkeys.join("-")) return false;
    return firstDictKeys.every(key => {
        return firstDict[key] === dict[key];
    })
  }
  return true;
};

module.exports = compare;
