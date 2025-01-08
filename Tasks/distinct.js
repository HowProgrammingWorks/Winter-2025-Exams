'use strict'

const distinct = (array) => {
  const collection = {};

  return array.filter(item => {
    if (collection[item]) {
      return false;
    }
    collection[item] = true;
    return true;
  });
};

module.exports = distinct;
