// Refactor following solution
// Delete listed keys from dictionary

'use strict';

const Drop = (dict, ...toDelete) => {
  const res = {};
  for (const key in dict) {
    if (!toDelete.includes(key)) {
      const value = dict[key];
      res[key] = value;
    }
  }

  return res;
};

module.exports = Drop;
