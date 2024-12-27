// Count types in an array

// Step 2
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
    const t = typeof i;
    typesCount[t]++;
  }
  
  return typesCount;
};