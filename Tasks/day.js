// Refactor following solution
// Get day number

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (dayString) => {
  const dayIndex = DAYS.findIndex(day =>
    dayString.toLowerCase().startsWith(day.toLowerCase()));
    return dayIndex !== -1 ? dayIndex +1 : -1;
};

module.exports = getDayNumber;
