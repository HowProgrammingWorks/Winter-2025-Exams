// Refactor following solution
// Copy only listed values from dict
"use strict";

const only = (obj, ...only) => {
  let result = {};
  const keys = Object.keys(obj);
  const picker = [...only];
  for(let key of keys) {
    if(picker.includes(key))
      result[key] = obj[key];  
  }
  return result;
};

module.exports = only;