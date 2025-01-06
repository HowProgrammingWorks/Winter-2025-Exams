'use strict';
// Reverse dict, exchange keys and values
// Step 5
// Prefer for..of instead forEach

const reverse = (obj) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    obj[value] = key;
    delete obj[key];
  }
  return obj;
};

module.exports = reverse;
