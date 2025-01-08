// Refactor following solution
// Copy all listed keys from dictionary
"use strict";

const take = (obj, ...needed) => {
  let result = {};
  const keys = Object.keys(obj);
  const toTake = [...needed];
  for(let key of keys)
    if(toTake.includes(key))
      result[key] = obj[key];
  return result;
};

module.exports = take;