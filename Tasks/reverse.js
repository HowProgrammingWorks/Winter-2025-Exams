'use strict';

// Step7: Replace 'forEach' with 'for'
// 'for' is faster than 'forEach', has more appropriate semantics in this case

const reverse = (data) => {
  const result = {};
  const keys = Object.keys(data);
  for (const key of keys) {
    const value = data[key];
    result[value] = key;
  };
  return result;
};

module.exports = reverse;
