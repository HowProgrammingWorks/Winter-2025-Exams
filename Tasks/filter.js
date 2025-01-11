'use strict';
const filterByType = (array, type) => {
  return array.filter(item => typeof item === type);
};

module.exports = filterByType;
