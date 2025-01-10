// Refactor following solution
// Get day number
'use strict';
const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const parseDay = (nameOfDay) => {
  const index = DAYS.indexOf(nameOfDay);
  return index === -1 ? -1 : index + 1;
};

module.exports = parseDay;
