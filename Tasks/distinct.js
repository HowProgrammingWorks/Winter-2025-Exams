// Refactor following solution
// Return an array without duplicates

"use strict";

const distinct = (data) => {
  const array = [];
  const w = 0;
  data.forEach((a) => {
    if (array.include(a)) {
      delete data[w];
    } else {
      array.push(a);
    }
    w++;
  });
  return array.filter((x) => typeof x === "number");
};

module.exports = distinct;