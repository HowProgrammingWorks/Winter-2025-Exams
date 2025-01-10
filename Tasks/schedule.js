'use strict';

// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`

const timeout = (interval) =>
  new Promise((resolve) => setInterval(resolve, interval));

const schedule = async (func, n, interval) => {
  for (let i = 0; i < n; i++) {
    func(i);
    await timeout(interval);
  }
};

module.exports = schedule;
