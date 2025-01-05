// Step 3
// Remove unnecessary or unreachable parts of code

'use strict';

const except = (dict, ...excludeKeys) => {
  const keys = Object.keys(dict);
  keys.forEach((key) => {
    if (excludeKeys.includes(key)) {
      delete dict[key];
    }
  });
  return dict;
};

module.exports = except;
