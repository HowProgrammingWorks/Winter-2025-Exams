// Refactor following solution
// Copy all values from dict except listed

'use strict'

const expect = (dict, ...stringList) => {
  const newDictExcludeKeys = Object.keys(dict)
  .filter((key) => !stringList.includes(key))
  .reduce((acc, current) => {
      acc[current] = dict[current]
      return acc;
  } , {})
  return newDictExcludeKeys;
};

module.exports = expect;
