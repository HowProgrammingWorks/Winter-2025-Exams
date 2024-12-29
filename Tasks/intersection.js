// Find an intersection of two dictionaries

'use strict';

const intersection = (obj1, obj2) => {
  const interDict = {};
  const keys = Object.keys(obj1);
  for (const key of keys) {
    if (obj1[key] === obj2[key]) {
      interDict[key] = obj1[key];
    }
  }
  return interDict;
};

module.exports = intersection;
