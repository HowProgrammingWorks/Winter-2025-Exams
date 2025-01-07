// Refactor following solution
// Compare two dictionaries

'use strict';

const compare = (firstDict, secondDict) => {
  return JSON.stringify(firstDict) === JSON.stringify(secondDict);
};

module.exports = compare;
