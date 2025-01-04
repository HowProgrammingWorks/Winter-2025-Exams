// Refactor following solution
// Make nested array plane

"use strict";

const plane = (arr) => {
  const result = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      result.push(...plane(value));
    } else {
      result.push(value);
    };
  };
  return result;
};

module.exports = plane;
