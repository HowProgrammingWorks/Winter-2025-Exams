'use strict';

const except = (dict, ...exceptList) => {
  let res = {};

  for(const key of Object.keys(dict)) {
    if (!exceptList.includes(key))
      res[key] = dict[key];
  }

  return res;
};

module.exports = except;
