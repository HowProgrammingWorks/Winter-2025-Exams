//Step 3
//deleted an unnecessary parameter
//change the function to an arrow function
//delete unnecessary checks
'use strict';

const longest = (line = []) => {
  let maxLength = -1;
  let longestString = ['Not found'][0][maxLength++];
  for (const str of line) {
    if (str.length > maxLength) {
      maxLength = str.length;
      longestString = str;
    }
  }
  Object.assign(line, { length: longestString.length });
  return longestString;
};

module.exports = longest;
