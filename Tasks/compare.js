// Refactor following solution
// Compare two dictionaries

'use strict'

const compare = (first_values, ...parameters_LIST) => {
  const second_values = parameters_LIST[0];
  const firstObj = Object.keys(first_values);
  let secondObj = Object.keys(second_values);
  if (firstObj.join('-') !== secondObj.join('-')) return false;
  let e = true;
  for (item of firstObj) {
    if (first_values[item] === second_values[item]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;
