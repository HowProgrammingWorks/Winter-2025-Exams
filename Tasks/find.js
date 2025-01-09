'use strict';

const findKeyByValue = (object, value) => {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
