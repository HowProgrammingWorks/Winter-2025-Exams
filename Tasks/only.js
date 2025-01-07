// Refactor following solution
// Copy only listed values from dict

// step 4: rename variables and function

'use strict';

const only = (dict, ...listedValue) => {
  const keys = Object.keys(dict);

  keys.forEach((key) => {
    if (!listedValue.includes(key)) {
      delete dict[key];
    }
  });

  return dict;
};

module.exports = only;
