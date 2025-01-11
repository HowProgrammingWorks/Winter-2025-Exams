// Refactor following solution
// Make nested array plane
"use strict";

const constPlane = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (Array.isArray(value)) res.push(...constPlane(value));
    else res.push(value);
  }
  return res;
};

module.exports = constPlane;
