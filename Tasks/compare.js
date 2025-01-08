'use strict'

// Refactor following solution
// Compare two dictionaries

const compare = (obj1, obj2) => {
  const firstObjKeys = Object.keys(obj1);
  const secondObjKeys = Object.keys(obj2);


  if(firstObjKeys.length !== secondObjKeys.length) return false

  if(!firstObjKeys.every((key, index) => key === secondObjKeys[index])) return false

  return firstObjKeys.every((key) => obj1[key] === obj2[key])
};

module.exports = compare;