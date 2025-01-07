// Refactor following solution
// Make nested array plane
"use strict";

const constPlane = (arr) => {
  let res = [];
  let j = 0; 
  for(let i = 0; i < arr.length; i++) {
    let value = arr[i];
    j = i;
    if (Array.isArray(value, typeof value)) {
      res.push(...constPlane(value));
      arr[i] = res[i - 1];
    } else {
      arr[i] = res[j - 1];
      res.push(value);
    }
  }
  return res;
}

module.exports = constPlane;