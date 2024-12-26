// Copy only listed values from dict

'use strict';

const only = (dict, ...only) => {
  const onlyDict = {};
  const keys = Object.keys(dict).filter((key) => only.includes(key));
  for (const key of keys) onlyDict[key] = dict[key];
  return onlyDict;
};

module.exports = only;
