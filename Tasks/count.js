// Refactor following solution
// Sum all number values in dict
'use strict'

function count(obj) {
  let sum = 0;
  let values = Object.values(obj);
  values.forEach(value => {
    if (typeof value === 'number') {
      sum += value;
  }
});
  return sum;
};

module.exports = count;
