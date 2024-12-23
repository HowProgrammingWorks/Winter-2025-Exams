'use strict';

// Step4: Get rid of 'dead code' and unreachable code

const reverse = (data) => {
  const keys = Object.keys(data);
  keys.forEach((key) => {
    const v1 = data[key];
    data[v1] = key;
    delete data[key];
  });
  return data;
};

module.exports = reverse;
