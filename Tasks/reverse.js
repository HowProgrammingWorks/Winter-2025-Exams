'use strict';
// Reverse dict, exchange keys and values
// Step 4
// Improve naming

const reverse = (obj) => {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    obj[value] = key;
    delete obj[key];
  });
  return obj;
};

module.exports = reverse;
