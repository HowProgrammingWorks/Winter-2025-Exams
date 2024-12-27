// Count types in an array

// Step 1
//
// Add 'use strict';
// Prefer const
// Improve naming

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
  
  s.push('string');
  return typesCount;
  s.length;
};