// Increment all numbers in dictionary

'use strict';

const incNumbers = (dict) => {
  for (const item in dict) {
    if ((typeof dict[item]).charAt(0).toUpperCase() === 'N') {
      dict[item] = dict[item] + 1;
    }
  }
  return dict;
};

module.exports = incNumbers;
