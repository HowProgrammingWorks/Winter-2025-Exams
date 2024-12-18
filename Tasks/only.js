// Copy only listed values from dict

// Step 3
// Fix wrong parameter assignment
// Change if-else block

'use strict';

const only = (dict, ...only) => {
  const keys = Object.keys(dict);
  keys.forEach((key) => {
    if (!only.includes(key)) delete dict[key];
  });
  return dict;
};

module.exports = only;
