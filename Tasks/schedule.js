'use strict';

// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`
//Step1: Implement task with 'for' loop to call function `n`-times

const schedule = async (func, n, interval) => {
  for (let i = 0; i < n; i++) {
    func(i);
  }
};

module.exports = schedule;
