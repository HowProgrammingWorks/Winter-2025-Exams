// Refactor following solution
// Delete listed keys from dictionary
'use strict';

const removeKeys = (dictionary, ...keysToDelete) => {
  const keysToDeleteSet = new Set(keysToDelete);
  Object.keys(dictionary).forEach((key) => {
    if (keysToDeleteSet.has(key)) {
      delete dictionary[key];
    }
  });
  return dictionary;
};


module.exports = removeKeys;