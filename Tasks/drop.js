// Refactor following solution
// Delete listed keys from dictionary
"use strict";

const delKeys = (dictionary, ...keysToDel) => {
  for (const key of Object.keys(dictionary)) {
    const isRequestedDel = keysToDel.includes(key);
    if (isRequestedDel) {
      delete dictionary[key];
    }
  }

  return dictionary;
};

module.exports = delKeys;
