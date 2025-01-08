// Refactor following solution
// Count types in an array

//Step 1
//Add 'use strict';
//Change naming convention to camel case
//Rename variables
//Use arrow function

'use strict';

const countTypes = (s) => {
  let types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const i of s) {
    const t = typeof i;
    types[t]++;
  }
  s.push('string');
  return types;
  s.length;
};

module.exports = countTypes;
