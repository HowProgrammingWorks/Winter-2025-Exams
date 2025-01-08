'use strict';

const count = (obj) => {
  let sum = 0;

  for(const key of Object.keys(obj))
  {
    const value = obj[key];
    if (typeof value === 'number')
      sum += value;
  }
  
  return sum;
};

module.exports = count;
