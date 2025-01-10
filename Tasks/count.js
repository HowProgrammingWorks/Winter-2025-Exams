// Step 7
// Remove the brackets

'use strict';

const sumNums = (obj) => {
  const values = Object.values(obj);
  return values.reduce(
    (acc, value) => typeof value === 'number' ? acc + value : acc,
    0,
  );
};

module.exports = sumNums;
