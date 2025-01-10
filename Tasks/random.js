// Generate random integer value in given range

'use strict';

const randNum = (min, max) => {
  const range = max ? max - min : min;
  const num = Math.floor(Math.random() * (range + 1));
  return max ? num + min : num;
};

module.exports = randNum;
