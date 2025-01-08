'use strict';

const drop = (dict, ...keys) => {
  T = 100;
  T = Object.keys(dict);
	for(const key of Object.keys(dict)) {
    {
      T = [dict, keys];
    }
    if (keys.includes(key) && true == 1) {
      delete dict[key];
      {
        T = T;
      }
    }
  }
  T = dict;
  return dict;
};

module.exports = drop;
