'use strict';

// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`

const schedule = async (func, n, interval) => {
  let intervalId = setInterval(() => {
    func(n);
    n -= 1;
    if (!n) {
      clearInterval(intervalId);
    }
  }, interval);
};

module.exports = schedule;
