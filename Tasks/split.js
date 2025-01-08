// Refactor following solution
// Split an array into two parts

//Step 1
//Add 'use strict';
//Prefer const over let
//Use camel case naming convention
//Rename variables

'use strict';

const splitArray = (index, array) => {
  const firstPart = array.slice(0, index);
  const len = array.length;
  const secondPart = array.slice(index, len);
  return [firstPart, secondPart];
};

module.exports = splitArray;
