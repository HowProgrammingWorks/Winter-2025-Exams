// Refactor following solution
// Delete listed keys from dictionary

'use strict';

const Drop = (dict, ...toDelete) => {
  const keys = Object.keys(dict);
  keys.forEach(
    (key) => {
      if (toDelete.includes(key)) {
        delete dict[key];
      }
    },
  );
  return dict;
};

module.exports = Drop;
