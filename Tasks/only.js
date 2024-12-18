// Copy only listed values from dict

// Step 5
// Fix mutation of incoming parameters

'use strict';

const only = (dict, ...only) => {
  const copiedDict = {};
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (only.includes(key)) copiedDict[key] = dict[key];
  }
  return copiedDict;
};

module.exports = only;
