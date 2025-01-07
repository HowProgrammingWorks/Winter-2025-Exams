// Refactor following solution
// Filter array by type name

'use strict'

const filterArray = (incomingData, type) => {
  const filteredData = [];
  for (const element of incomingData) {
    if (typeof element === type) {
      filteredData.push(element);
    }
  }
  return filteredData;
};

module.exports = filterArray;
