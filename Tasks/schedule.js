'use strict';

// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`

const delay = (interval) => {
    return new Promise(resolve => setTimeout(resolve, interval));
};

const schedule = async (func, n, interval) => {
    for (let i = 0; i < n; i++) {
        func(i);
        await delay(interval);
    }
};

module.exports = schedule;
