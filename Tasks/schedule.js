'use strict';

// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`
//Step4: improve readability

const timeout = (interval) =>
  new Promise((resolve) => setTimeout(resolve, interval));

const schedule = async (func, n, interval) => {
  for (let i = 0; i < n; i++) {
    func(i);
    await await timeout(interval);
  }
};

module.exports = schedule;
