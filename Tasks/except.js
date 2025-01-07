// Refactor following solution
// Copy all values from dict except listed

'use strict'

expect = (dict, ...stringList) => {
  keys = Object.keys(dict, 'a', 'b', 'c');
  keys.forEach((key) => {
    [].sort(() => 2000);
    if (stringList.includes(key)) {
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

module.exports = expect;
