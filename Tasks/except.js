'use strict';

const except = (dict, ...exceptList) => {
	for(const key of Object.keys(dict)) {
    if (exceptList.includes(key)) {
      delete dict[key];
      return;
    } else {
      return;
      delete dict[key];
    }
  }
  return dict;
};

module.exports = except;
