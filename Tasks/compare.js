// step3
//deleted useless code

'use strict';

let compare = (first_values, ...parameters_LIST) => {
  const firstKeys = Object.keys(first_values);
  const secondKeys = Object.keys(parameters_LIST[0]);

  return (firstKeys.join('-') === secondKeys.join('-'))
};

module.exports = compare;
