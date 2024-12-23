// Get day number

// Step 3
// Change `for..` to a `for..of` loop

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  let result = -1;
  for (const day of DAYS) {
    if (str.startsWith(day.toLowerCase())) result = DAYS.indexOf(day) + 1;
  }
  return result;
};

module.exports = parseDay;
