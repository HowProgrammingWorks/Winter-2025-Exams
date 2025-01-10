// Find an intersection of two dictionaries

'use strict';

const intersection = (obj1, obj2) => {
  const intersectionDict = {};
  const keys = Object.keys(obj1).filter((key) => obj1[key] === obj2[key]);
  for (const key of keys) intersectionDict[key] = obj1[key];
  return intersectionDict;
};

module.exports = intersection;
