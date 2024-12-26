// Copy only listed values from dict

'use strict';

const only = (dict, ...only) => {
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (!only.includes(key)) delete dict[key];
  }
  return dict;
};

module.exports = only;
