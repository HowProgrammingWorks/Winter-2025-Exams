// Refactor following solution
// Delete listed keys from dictionary

'use strict'

const drop = (dictionary, ...keyList) => {
  const newDictionary = {...dictionary} 
  Object.keys(newDictionary).forEach((key) => {
      if (keyList.includes(key)) {
        delete newDictionary[key];
      }
    });
  return newDictionary;
};

module.exports = drop;

