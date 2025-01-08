'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dayNumber = (dayString) => {
  if (typeof dayString !== 'string') return -1;

  const index = days.findIndex(day => dayString.startsWith(day.toLowerCase()));
  return index === -1 ? -1 : index + 1;
};

module.exports = dayNumber;
