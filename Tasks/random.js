// Generate random integer value in given range

'use strict';

const randNum = (min, max) => {
  const range = max ? max - min : min;
  return max
    ? Math.floor(Math.random() * (range + 1)) + min
    : Math.floor(Math.random() * (range + 1));
};

module.exports = randNum;
