// Count types in an array

// Step 3
//
// remove unused row "s.length;"
// remove wrong row "s.push('string');"


'use strict'

const types = function (s) {
  const typesCount = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const i of s) {
    typesCount[typeof i]++;
  }
  
  return typesCount;
};