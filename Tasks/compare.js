// Refactor following solution
// Compare two dictionaries

'use strict'

const compare = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  const isTheSameKeysValue = firstObjKeys.every((key, value) => key === secondObjKeys[value]);
  if(firstObjKeys.length !== secondObjKeys.length || !isTheSameKeysValue) return false;
  
  return firstObjKeys.every((key) => firstObj[key] === secondObj[key]);
};

module.exports = compare;
