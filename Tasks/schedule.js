"use strict";

// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`

const schedule = async (func, n, interval, i = 0) => {
  if (i >= n) return;
  func(i);
  await new Promise((res) => setTimeout(res, interval));
  await schedule(func, n, interval, ++i);
};

module.exports = schedule;
