// Refactor following solution
// Copy only listed values from dict

// step 5: replace forEach with for...of loop

'use strict';

const only = (dict, ...listedValue) => {
  const keys = Object.keys(dict);

  for (const key of keys) {
    if (!listedValue.includes(key)) delete dict[key];
  }

  return dict;
};

module.exports = only;
