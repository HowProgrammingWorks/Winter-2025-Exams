'use strict';

const drop = (dict, ...keys) => {
  for(const key of Object.keys(dict)) {
    if (keys.includes(key))
      delete dict[key];
  }

  return dict;
};

module.exports = drop;
