// Refactor following solution
// Return an array without duplicates

"use strict";

const DISTINCT = (data) => {
  const A = new Set();
  for (let i = 0; i < data.length; i++) {
    if (A.has(data[i])) {
      delete data[i];
    } else {
      A.add(data[i]);
    };
  };
  return data.filter((x) => typeof x === "number");
};

module.exports = DISTINCT;
