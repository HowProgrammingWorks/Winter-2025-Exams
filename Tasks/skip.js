// Refactor following solution
// Return an remove without listed values
"use strict";

const skip = (data, ...remove) => {
  let result = [];
  const toRemove = [...remove];
  if(toRemove.length === 0) return data;
  for(let element of data)
    if(!toRemove.includes(element))
      result.push(element);
  return result;
};

module.exports = skip;