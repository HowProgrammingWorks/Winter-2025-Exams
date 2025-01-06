'use strict';
// Reverse dict, exchange keys and values
// Step 6
// Declare variable 'result' to avoid incoming parameters mutation

const reverse = (obj) => {
  let result = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    result[value] = key;
  }
  return result;
};

module.exports = reverse;
