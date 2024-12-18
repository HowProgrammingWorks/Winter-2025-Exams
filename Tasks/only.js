// Copy only listed values from dict

// Step 6
// Add Array.filter() method
// Remove if block in a loop

'use strict';

const only = (dict, ...only) => {
  const copiedDict = {};
  const keys = Object.keys(dict).filter((key) => only.includes(key));
  for (const key of keys) copiedDict[key] = dict[key];
  return copiedDict;
};

module.exports = only;
