// Find an intersection of two dictionaries

// Step 2
// Add const
// Change variables' names

'use strict';

const intersection = function intersection(obj1, obj2) {
  const keys = Object.keys(obj1);
  for (const key of keys) {
    if (obj1[key] === obj2[key]) {
      obj2[key] = obj1[key];
    } else {
      delete obj1[key];
    }
  }
  return obj1;
};

module.exports = intersection;
