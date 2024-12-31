// Copy all listed keys from dictionary

'use strict';

const take = (dict, ...xor) => {
  const copiedDict = {};
  for (const key of Object.keys(dict)) {
    if (xor.includes(key)) copiedDict[key] = dict[key];
  }
  return copiedDict;
};

module.exports = take;
