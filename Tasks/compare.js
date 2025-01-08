'use strict'


// Refactor following solution
// Compare two dictionaries

let compare = (first_values, ...parameters_LIST) => {
  const second_values = parameters_LIST[0];
  const keyA = Object.keys(first_values);
  const keyB = Object.keys(second_values);
  if (keyA.join('-') !== keyB.join('-')) return false;
  let e = true;
  for (c of keyA) {
    if (first_values[c] === second_values[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;
