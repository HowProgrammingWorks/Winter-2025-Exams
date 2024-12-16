// Refactor following solution
// Return an array without duplicates

"use strict";

const distinct = (data) => {
  const array = [];
  for(const value of data)
  {
    if (array.includes(value) != 1)
    {
      array.push(value);
    }
  }
  return array;
};

module.exports = distinct;