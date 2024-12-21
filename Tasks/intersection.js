// Find an intersection of two dictionaries

// Step 4
// Remove delete operator

'use strict';

const intersection = (obj1, obj2) => {
  const inter = {};
  const keys = Object.keys(obj1);
  for (const key of keys) {
    if (obj1[key] === obj2[key]) inter[key] = obj1[key];
  }
  return inter;
};

module.exports = intersection;
