// Refactor following solution
// Delete listed keys from dictionary
"use strict";

const drop = (D, ...X) => {
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

module.exports = drop;