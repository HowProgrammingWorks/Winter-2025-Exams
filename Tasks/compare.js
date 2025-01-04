// step4
//change the method of objects

'use strict';

let compare = (first_values, ...parameters_LIST) => {
  const firstKeys = Object.entries(first_values);
  const secondKeys = Object.entries(parameters_LIST[0]);

  return firstKeys.join('-') === secondKeys.join('-');
};
module.exports = compare;
