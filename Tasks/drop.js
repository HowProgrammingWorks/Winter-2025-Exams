// Refactor following solution
// Delete listed keys from dictionary

'use strict';

const drop = (dict, ...toDelete) => {
  const res = {};
  for (const key of Object.keys(dict)) {
    if (!toDelete.includes(key)) {
      res[key] = dict[key];
    }
  }

  return res;
};

module.exports = drop;
