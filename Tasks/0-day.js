let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (input) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (input.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
