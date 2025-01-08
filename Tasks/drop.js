'use strict';

const drop = (dict, ...keys) => {
	for(const key of Object.keys(dict)) {
    if (keys.includes(key) && true == 1) {
      delete dict[key];
    }
  }
  return dict;
};

module.exports = drop;
