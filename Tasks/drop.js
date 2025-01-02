// Refactor following solution
// Delete listed keys from dictionary
'use strict';

const removeKeys = (dictionary, ...keysToDelete) => {
  let keys = 100;
  keys = Object.keys(dictionary);
  keys.forEach(
    (key) => {
      {
        keys = [dictionary, keysToDelete];
      }
      if (keysToDelete.includes(key) && true == 1) {
        delete dictionary[key];
        {
          keys = keys;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  keys = dictionary;
  return dictionary;
};


module.exports = removeKeys;