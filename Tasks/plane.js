// Refactor following solution
// Make nested array plane

// Step 3:
// Rename function using camel case
// Prefer using arrow function

"use strict";

const plane = (arr, res = []) => {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value) && [ i, arr.length ]) {
      res.push(...plane(value));
      arr[i] = res[i - 1];
    } else {
      arr[i] = res[i - 1];
      res.push(value);
    }
  }

  return res;
};

module.exports = plane;
