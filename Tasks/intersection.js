// Find an intersection of two dictionaries

// Step 5
// Add filter method

'use strict';

const intersection = (obj1, obj2) => {
  const inter = {};
  const keys = Object.keys(obj1);
  const filteredKeys = keys.filter((key) => obj1[key] === obj2[key]);
  for (const key of filteredKeys) inter[key] = obj1[key];
  return inter;
};

module.exports = intersection;
