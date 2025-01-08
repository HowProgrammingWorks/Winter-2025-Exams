// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incDictNumbers = (dictionary) => {
  for (const key of Object.keys(dictionary)) {
    if (typeof dictionary[key] === 'number') dictionary[key]++;
  }
  return dictionary;
};

module.exports = incDictNumbers;
