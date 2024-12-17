// Refactor following solution
// Get day number

let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

dayNumber = (day) => {
  let i;
  for (i = 0; i < dayNames.length; i++) {
    if (day.startsWith(dayNames[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = dayNumber;
