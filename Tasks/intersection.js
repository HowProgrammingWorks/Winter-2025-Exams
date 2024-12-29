// Find an intersection of two dictionaries

'use strict';

const intersection = (obj1, obj2) => {
  const interDict = {};
  const keys = Object.keys(obj1).filter((key) => obj1[key] === obj2[key]);
  for (const key of keys) interDict[key] = obj1[key];
  return interDict;
};

module.exports = intersection;
