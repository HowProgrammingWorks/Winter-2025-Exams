// Refactor following solution
// Copy all values from dict except listed

'use strict'

const expect = (dict, ...stringList) => {
  const keys = Object.keys(dict);
  const newDict = {};
  keys.forEach((key) => {
    if (!stringList.includes(key)) {
      newDict[key] = dict[key];
    }
  });
  return newDict;
};

module.exports = expect;
