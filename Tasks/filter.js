// Refactor following solution
// Filter array by type name

'use strict'

const filterArray = (incomingData, type) => {
  const removeIndex = [];
  for (const element of incomingData) {
    const index = incomingData.indexOf(element);
    if (typeof incomingData[index] !== type) {
      removeIndex.unshift(index);
    }
  }
  for (const element of removeIndex) incomingData.splice(element, 1);
  return incomingData;
};

module.exports = filterArray;
