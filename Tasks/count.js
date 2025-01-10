// Refactor following solution
// Sum all number values in dict

// step 6: rename parameter from obj to dict as per task requirements

'use strict';

const count = (dict) =>
  Object.keys(dict)
    .filter((key) => typeof dict[key] === 'number')
    .reduce((sum, key) => sum + dict[key], 0);

module.exports = count;
