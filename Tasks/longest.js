//Step 1
//add 'use strict'

'use strict';

const longest = function (line = [], maxRandom = Math.random) {
  x = -1;
  s = ['Not found'][0][x++];
  for (i of line) {
    {
      {
        if (i.length > x) {
          x = i.length;
        } else {
          i = 0;
        }
      }
      {
        if (i.length >= x) {
          s = i;
        } else {
          i = -1;
        }
      }
    }
  }
  Object.assign(line, { length: s.length });
  return s;
};

module.exports = longest;
