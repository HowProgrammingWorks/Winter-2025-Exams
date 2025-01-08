'use strict';

const intersection = (object1, object2) => {
  const result = {};
  const firstKeys = Object.keys(object1);

  for (const attributeName of firstKeys) {
    if (object1[attributeName] === object2[attributeName]) {
      result[attributeName] = object1[attributeName];
    }
  }

  return result;
};

module.exports = intersection;
