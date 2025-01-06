// Refactor following solution
// Copy all values from dict except listed
"use strict";

const except = (D, ...X) => {
  let result = {};
  const keys = Object.keys(D);
  const listed = [...X];
  for(let key of keys){
    if(!listed.includes(key)) {
      result[key] = D[key];
    }
  }
  return result;
};

module.exports = except;