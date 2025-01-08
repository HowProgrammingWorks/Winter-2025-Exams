// Refactor following solution
// Delete listed keys from dictionary

'use strict';

const Drop = (dict, ...toDelete) => {
  for (const key in dict) {
    if (toDelete.includes(key)) {
      delete dict[key];
    }
  }

  return dict;
};

module.exports = Drop;
