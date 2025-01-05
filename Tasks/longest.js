//Step 5
//renamed the function parameters

'use strict';

const longest = (line ) => {
  let maxLength = -1;
  let longestString = 'Not found';
  for (const str of line) {
    if (str.length > maxLength) {
      maxLength = str.length;
      longestString = str;
    }
  }

  return longestString;
};

module.exports = longest;
