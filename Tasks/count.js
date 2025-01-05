// Step 6
// Decrease the size of the program
// Move function initialization inside of the reduce method

'use strict';

const sumNums = (obj) => {
  const values = Object.values(obj);
  return values.reduce(
    (acc, value) => (typeof value === 'number' ? acc + value : acc),
    0,
  );
};

module.exports = sumNums;
