// Refactor following solution
// Get day number

'use strict'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => day.toLowerCase());

const getDayNumber = (oneDay) => {
    oneDay === oneDay.toLowerCase();
    const index = days.findIndex(day => oneDay.startsWith(day));
    return index !== -1 ? index + 1: -1;
};

module.exports = getDayNumber;
