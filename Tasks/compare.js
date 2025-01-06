// Refactor following solution
// Compare two dictionaries
"use strict";

const compare = (first_values, second_values) => {
  let result = true;
  const a = Object.keys(first_values);
  const b = Object.keys(second_values);
  if(a.join('-') !== b.join('-')) result = false;
  for (let key of a) {
    if (first_values[key] !== second_values[key]){
      result = false;
      break;
    } 
  }
  return result;
};

module.exports = compare;