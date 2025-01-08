// Refactor following solution
// Reverse dict, exchange keys and values
"use strict";

const reverse = (obj) => {
  let result = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for(let i = 0; i < keys.length; i++) {
    let newKey = values[i];
    let newVal = keys[i];
    result[newKey] = newVal;
  }
  return result;
};

module.exports = reverse;