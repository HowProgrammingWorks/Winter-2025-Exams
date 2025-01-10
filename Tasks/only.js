// Copy only listed values from dict

'use strict';

const only = (dict, ...toCopy) => {
  const copiedDict = {};
  const keys = Object.keys(dict).filter((key) => toCopy.includes(key));
  for (const key of keys) copiedDict[key] = dict[key];
  return copiedDict;
};

module.exports = only;
