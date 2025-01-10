// Copy all listed keys from dictionary

'use strict';

const take = (dict, ...xor) => {
  const copiedDict = {};
  const keys = Object.keys(dict).filter((key) => xor.includes(key));
  for (const key of keys) copiedDict[key] = dict[key];
  return copiedDict;
};

module.exports = take;
