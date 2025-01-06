// Refactor following solution
// Compare two dictionaries
"use strict";

const compare = (first_values, second_values) => {
  const a = Object.keys(first_values);
  const b = Object.keys(second_values);
  let result = true;
  for (c of a) {
    if (first_values[c] === second_values[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;