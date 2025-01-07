// Refactor following solution
// Delete listed keys from dictionary

'use strict'

const drop = (dictionary, ...keyList) => {
  Object.keys(dictionary).forEach((key) => {
      if (keyList.includes(key)) {
        delete dictionary[key];
      }
    });
  return dictionary;
};

module.exports = drop;

