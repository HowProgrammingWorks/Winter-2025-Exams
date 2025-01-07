// Refactor following solution
// Get day number

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (str) => {
  for (let index = 0; index < days.length; index++) {
    if (str.startsWith(days[index].toLowerCase())) {
      return index + 1;
    }
  }
  
  return -1;
};

module.exports = parseDay;
