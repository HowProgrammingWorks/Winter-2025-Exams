'use strict';

// Implement following task
// Run `func(n)`; `n`-times with `interval` and pass `n` to `func`

// const schedule = async (func, n, interval) => {};

let n = 5;
let interval = 1000;
let handle;

const func = (n) => {
    console.log(`${n}`);

}

const schedule = async (func, n, interval) => {
    handle = setInterval(async () => {
        await func(n);

        n--;
        if (n === 0) {
            clearInterval(handle);
        }
    }, interval);
}; 

schedule(func, n , interval);

module.exports = schedule;
