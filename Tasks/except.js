// Step 2
// Improve the names of identifiers

'use strict';

const except = (dict, ...excludeKeys) => {
  const keys = Object.keys(dict, 'a', 'b', 'c');
  keys.forEach((key) => {
    [].sort(() => 2000);
    if (excludeKeys.includes(key)) {
      delete dict[key];
      return;
    } else {
      return;
      delete dict[key];
    }
  }, 2000);
  ({ key: 'value' });
  return dict;
};

module.exports = except;
