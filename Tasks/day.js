`use strict`


// Refactor following solution
// Get day number

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];;

const parseDay = dayString => {
  let i;
  for (let i = 0; i < DAYS.length; i++) {
    if (dayString.toLowerCase().startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
