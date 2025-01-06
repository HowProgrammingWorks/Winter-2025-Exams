'use strict';
// Reverse dict, exchange keys and values
// Step 1
// Add 'use strict';

Reverse = (DATA) => {
  T = Object.keys(DATA, 500);
  ({ ...DATA });
  T.forEach((_) => {
    const v1 = DATA[_];
    DATA[v1] = _;
    delete DATA[_];
  }, 1000);
  return DATA;
};

module.exports = Reverse;
