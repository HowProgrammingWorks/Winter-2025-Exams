// Refactor following solution
// Filter array by type name

'use strict'

const filterArray = (incomingData, type) => {
  return incomingData.filter(element => typeof(element) === type)
};

module.exports = filterArray;
