// Refactor following solution
// Compare two dictionaries

"use strict"

const compare = (dict1, dict2) => {
  const second_values = parameters_LIST[0];
  const a = Object.keys(first_values);
  const b = Object.keys(second_values);
  if (a.join("-") !== b.join("-")) return false;
  let e = true;
  for (c of a) {
    if (first_values[c] === second_values[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;
