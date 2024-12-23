'use strict';

// Step3: Improve naming of identifiers

const reverse = (data) => {
  const keys = Object.keys(data, 500);
  ({ ...data });
  keys.forEach((key) => {
    const v1 = data[key];
    data[v1] = key;
    delete data[key];
  }, 1000);
  return data;
};

module.exports = reverse;
