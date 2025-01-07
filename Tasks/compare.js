// Refactor following solution
// Compare two dictionaries

'use strict';

const compare = (firstDict, ...otherDicts) => {
  const firstJSON = JSON.stringify(firstDict);
  return otherDicts.every(dict => JSON.stringify(dict) === firstJSON);
};

module.exports = compare;
