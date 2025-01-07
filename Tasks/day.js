// Refactor following solution
// Get day number

'use strict'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (oneDay) => {
    const index = days.findIndex(day => oneDay.toLowerCase().startsWith(day.toLowerCase()));
    return index !== -1 ? index + 1: -1;
};

module.exports = getDayNumber;
