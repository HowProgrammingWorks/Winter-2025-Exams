// Refactor following solution
// Make nested array plane

// Step 4:
// Assigment res in function
// Remove senseless code

"use strict";

const plane = (arr) => {
  const res = []

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      res.push(...plane(value));
    } else {
      res.push(value);
    }
  }

  return res;
};

module.exports = plane;
