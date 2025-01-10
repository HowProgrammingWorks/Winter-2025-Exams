'use strict';

const except = (dict, ...exceptList) => {
  const res = {};

  for (const key of Object.keys(dict)) {
    if (!exceptList.includes(key)) {
      res[key] = dict[key];
    }
  }

  return res;
};

module.exports = except;
