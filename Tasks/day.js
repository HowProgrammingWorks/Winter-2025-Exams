// Get day number

// Step 4
// Change loop to a `find` method
// Add ternary operator

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  const result = DAYS.find((day) => str.startsWith(day.toLowerCase()));
  return result ? DAYS.indexOf(result) + 1 : -1;
};

module.exports = parseDay;
