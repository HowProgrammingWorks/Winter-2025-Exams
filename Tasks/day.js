// Refactor following solution
// Get day number

let D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

getDayNumber = (stringDay) => {
  for (let i = 0; i < D.length; i++) {
    if (stringDay.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
