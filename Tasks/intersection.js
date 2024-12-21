// Find an intersection of two dictionaries

// Step 3
// Change function identifier
// Fix mutation of incoming parameters

'use strict';

const intersection = (obj1, obj2) => {
  const inter = obj1;
  const keys = Object.keys(inter);
  for (const key of keys) {
    if (inter[key] !== obj2[key]) delete inter[key];
  }
  return inter;
};

module.exports = intersection;
