'use strict';

// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`

const schedule = async (func, n, interval) => {
    for(let i = 1; i <= n; i++) {
        setTimeout(() => {
            func(n)
        }, interval)
    }
};

module.exports = schedule;
