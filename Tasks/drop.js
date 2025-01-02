// Refactor following solution
// Delete listed keys from dictionary
'use strict';

const removeKeys = (dictionary, ...keysToDelete) => {
  Object.keys(dictionary).forEach((key) => {
    if (keysToDelete.includes(key)) {
      delete dictionary[key];
    }
  });
  return dictionary;
};


module.exports = removeKeys;