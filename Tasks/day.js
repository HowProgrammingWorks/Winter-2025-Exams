'use strict';

// Refactor following solution
// Get day number

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (day) => {
  if (typeof day !== 'string') return -1;

  const index = weekDays.findIndex((weekDay) =>
    day.startsWith(weekDay.toLowerCase())
  );
  return index !== -1 ? index + 1 : -1;
};

module.exports = parseDay;
