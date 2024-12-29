// Find an intersection of two dictionaries

'use strict';

const intersection = (obj1, obj2) => {
  const keys = Object.keys(obj1);
  for (const key of keys) {
    if (obj1[key] !== obj2[key]) {
      delete obj1[key];
    }
  }
  return obj1;
};

module.exports = intersection;
