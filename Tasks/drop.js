'use strict';

const drop = (dict, ...keys) => {
  let res = {};
  
  for(const key of Object.keys(dict)) {
    if (!keys.includes(key))
      res[key] = dict[key];
  }

  return res;
};

module.exports = drop;
