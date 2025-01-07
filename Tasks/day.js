// Refactor following solution
// Get day number

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (input) => {
  for (let index = 0; index < days.length; index++) {
    if (input.startsWith(days[index].toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = parseDay;


