'use strict';

// Step5: Replace 'forEach' with 'for'
// 'for' is faster than 'forEach', has more appropriate semantics in this case

const countValues = (object) => {
  let sum = 0;
  const keys = Object.keys(object);
  for (const key of keys) {
    const value = object[key];
    if (typeof value === 'number') sum += value;
  };
  return sum;
};

module.exports = countValues;
