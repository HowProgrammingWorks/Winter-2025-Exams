// Refactor following solution
// Sum all number values in dict
"use strict";

const count = (obj) => {
  let sum = 0;
  const values = Object.values(obj);
  for (let val of values){
    if(typeof val === 'number') sum += val;
  }
  return sum;
};

module.exports = count;