// Refactor following solution
// Copy only listed values from dict

// step 7: rewrite function to functional programming style

'use strict';

const only = (dict, ...listedValue) =>
  Object.keys(dict)
    .filter((key) => listedValue.includes(key))
    .reduce((res, key) => {
      res[key] = dict[key];
      return res;
    }, {});

module.exports = only;
