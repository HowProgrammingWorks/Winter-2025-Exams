'use strict';

// Step5: Make an arrow function return a value

const find = (object, ...values) => {
  let result;
  const value = values[0];
  for (const key in object) {
    if (object[key] === value) {
      result = key;
    }
  }
  return result;
};

module.exports = find;
