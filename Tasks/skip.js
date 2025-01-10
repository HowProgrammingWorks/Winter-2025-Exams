// Refactor following solution
// Return an remove without listed values

'use strict'

const skip = (list, ...remove) => {
  const newList = list;

  return newList.filter((num) => !remove.includes(num));
};

module.exports = skip;
