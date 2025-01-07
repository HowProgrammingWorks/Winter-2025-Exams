// Refactor following solution
// Compare two dictionaries

'use strict'

const compare = (firstDict, ...otherDict) => {
  const secondDict = otherDict[0];
  const firstDictKeys = Object.keys(firstDict);
  const secondDictKeys = Object.keys(secondDict);
  if (firstDictKeys.join('-') !== secondDictKeys.join('-')) return false;
  let flag = true;
  for (const key of firstDictKeys) {
    if (firstDict[key] === secondDict[key]) flag = flag && true;
    else {
      flag = flag && false;
    }
  }
  return flag;
};

module.exports = compare;
