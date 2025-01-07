// Refactor following solution
// Delete listed keys from dictionary

'use strict'

const drop = (dictionary, ...keyList) => {
  return Object.keys(dictionary).reduce((acc, key) => {
      if (!keyList.includes(key)) {
          acc[key] = dictionary[key];
      }
      return acc;
    },{})
};

module.exports = drop;

