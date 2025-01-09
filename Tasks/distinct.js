// Refactor following solution
// Return an array without duplicates

"use strict";

const distinct = (arr) => {
  const uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!uniqueElements.includes(element)) uniqueElements.push(element);
  };
  return uniqueElements.filter((el) => typeof el === "number");
};

module.exports = distinct;
