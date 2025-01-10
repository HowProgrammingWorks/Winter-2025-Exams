'use strict';

const count = (obj) => {
  return Object.keys(obj).reduce((total, key) => {
    const value = obj[key];
    if (typeof value === 'number')
      return total + value;
    else
      return total;
  }, 0);
};

module.exports = count;
