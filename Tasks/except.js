// Step 4
// Improve iteration
// Copy values from the original dictionary
// Replace `.forEach()` for `for` loop

'use strict';

const except = (dict, ...excludeKeys) => {
  const copy = {};
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (!excludeKeys.includes(key)) {
      copy[key] = dict[key];
    }
  }
  return copy;
};

module.exports = except;
