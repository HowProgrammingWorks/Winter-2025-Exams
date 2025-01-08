// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const incNumbers = (dictionary, ...rest_variables) => {
  for (const key in dictionary) {
    if ((typeof dictionary[key]).charAt(0).toUpperCase() === 'N') {
      dictionary[key] = dictionary[key] + 1;
    }
  }
  return dictionary;
};

module.exports = incNumbers;
