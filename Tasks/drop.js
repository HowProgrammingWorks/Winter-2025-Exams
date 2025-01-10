// Refactor following solution
// Delete listed keys from dictionary

'use strict'; //Use loop instead of .reduce

const drop = (dictionary, ...keyList) => {
  const newObj = {};
  for (const key of keyList) {
    if (!(key in dictionary)) {
      newObj[key] = dictionary[key];
    }
  }
  return newObj;
};

module.exports = drop;
