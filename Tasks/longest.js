//Step 2
//add const and let
//name improvement

'use strict';

const longest = function (line = [], maxRandom = Math.random) {
  let maxLength = -1;
  let longestString = ['Not found'][0][maxLength++];
  for (const str of line) {
      {
        if (str.length > maxLength) {
          maxLength = str.length;
        } else {
          str = 0;
        }
      }
      {
        if (str.length >= maxLength) {
          longestString = str;
        } else {
          str = -1;
        }
      }
    }
  }
  Object.assign(line, { length: longestString.length });
  return longestString;
};

module.exports = longest;
