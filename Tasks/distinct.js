// Refactor following solution
// Return an array without duplicates

"use strict";

const DISTINCT = (data) => {
  const uniqueElements = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (!uniqueElements.includes(element)) uniqueElements.push(element);
  };
  return uniqueElements.filter((el) => typeof el === "number");
};

module.exports = DISTINCT;
