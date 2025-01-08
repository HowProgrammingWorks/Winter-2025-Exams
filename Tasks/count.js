'use strict'


// Refactor following solution
// Sum all number values in dict

const count = (object) => {
  let sum = 0;
  
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof object[key] === 'number') {
      sum += object[key];
    }
  }

  return sum;
};

module.exports = count;
