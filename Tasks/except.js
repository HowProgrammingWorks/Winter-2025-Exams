// Refactor following solution
// Copy all values from dict except listed

'use strict'

const expect = (dict, ...stringList) => {
  const keys = Object.keys(dict);
  keys.forEach((key) => {
    if (stringList.includes(key)) {
      delete dict[key];
    }
  });
  return dict;
};

module.exports = expect;
