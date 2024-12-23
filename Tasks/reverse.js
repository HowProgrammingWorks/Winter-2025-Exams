'use strict';

// Step6: Avoid changing the original object in function

const reverse = (data) => {
  const result = {};
  const keys = Object.keys(data);
  keys.forEach((key) => {
    const value = data[key];
    result[value] = key;
  });
  return result;
};

module.exports = reverse;
