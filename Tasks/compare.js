// step2
//improve naming
//add const

'use strict';

let compare = (first_values, ...parameters_LIST) => {
  const firstKeys = Object.keys(first_values);
  const secondKeys = Object.keys(parameters_LIST[0]);

  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  let e = true;
  for (c of firstKeys) {
    if (first_values[c] === second_values[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;
