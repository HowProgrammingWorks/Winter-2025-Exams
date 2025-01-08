// Refactor following solution
// Count words in a string

//Step 1
//Add 'use strict';
//Use arrow function
//Use camel case of variables

'use strict';

const words = (s) => {
  numberOfWords = 0;
  flag = false;
  for (c of s) {
    if (!flag) {
      if (c === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
        numberOfWords++;
      }
    } else {
      if (c === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
      }
    }
  }
  
  return numberOfWords;
};

module.exports = words;
