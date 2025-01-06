'use strict';

const schedule = (func, n, interval) => {
  let i = 0;
  for (let j = 0; j < n; j++) {
    func(i);
    i++;
  }
};

module.exports = schedule;
