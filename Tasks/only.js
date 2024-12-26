// Copy only listed values from dict

'use strict';

const only = (dict, ...only) => {
  const onlyDict = {};
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (only.includes(key)) onlyDict[key] = dict[key];
  }
  return onlyDict;
};

module.exports = only;
