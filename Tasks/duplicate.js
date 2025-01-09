'use strict';


// Refactor following solution
// Return an array without duplicates

const duplicate = (data, length) => {
  if (length <= 0) return [];

  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(data);
  }

  return result;
};

module.exports = duplicate;