// Refactor following solution
// Get day number

// Step 5
// Rename days to lower case

'use strict';

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
    const index = days.findIndex((d) => day.startsWith(d));
    return index !== -1 ? index + 1 : -1
};

module.exports = parseDay;