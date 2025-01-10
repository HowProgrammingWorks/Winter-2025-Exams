// Refactor following solution
// Copy only listed values from dict

// step 7: rewrite function to functional programming style

'use strict';

const only = (dict, ...listedValue) => {
  const result = {};

  for (const key of Object.keys(dict)) {
    if (listedValue.includes(key)) {
      result[key] = dict[key];
    }
  }

  return result;
};

module.exports = only;
