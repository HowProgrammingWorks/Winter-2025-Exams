'use strict';

// Step5: Get rid of 'dead code' and unreachable code

const countTypes = (array) => {
  const typesList = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of array) {
    const type = typeof item;
    typesList[type]++;
  }
  return typesList;
};

module.exports = countTypes;
