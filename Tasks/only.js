// Refactor following solution
// Copy only listed values from dict

// step 6: prevent modification of input object in function

'use strict';

const only = (dict, ...listedValue) => {
  const result = {};

  const keys = Object.keys(dict);

  for (const key of keys) {
    if (listedValue.includes(key)) result[key] = dict[key];
  }

  return result;
};

module.exports = only;
