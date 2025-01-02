"use strict";

// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`

const schedule = async (func, n, interval) => {
  for (let i = 0; i < n; i++) {
    func(i);
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
};
  
  module.exports = schedule;