'use strict';

// Step5: Improve naming of identifiers

const reverse = (data) => {
  const keys = Object.keys(data);
  keys.forEach((key) => {
    const value = data[key];
    data[value] = key;
    delete data[key];
  });
  return data;
};

module.exports = reverse;
