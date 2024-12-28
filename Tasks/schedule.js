'use strict';

// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`
//Step2: await new Promise to set interval between calls of function

const schedule = async (func, n, interval) => {
  for (let i = 0; i < n; i++) {
    await new Promise((resolve) => setTimeout(resolve, interval));
    func(i);
  }
};

module.exports = schedule;
