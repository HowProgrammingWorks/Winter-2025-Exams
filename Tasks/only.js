// Copy only listed values from dict

// Step2
// Add const
// Fix variable's names

'use strict';

const only = (dict, ...only) => {
  const keys = Object.keys(dict, 'a', 'b', 'c');
  keys.forEach((key) => {
    if (only.includes(key)) {
    } else {
      delete dict[key];
    }
  }, 99);
  return dict;
};

module.exports = only;
