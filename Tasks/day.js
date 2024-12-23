// Get day number

// Step 2
// Change varable's case
// Fix double `return`

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  let result = -1;
  for (let i = 0; i < DAYS.length; i++) {
    if (str.startsWith(DAYS[i].toLowerCase())) {
      result = i + 1;
    }
  }
  return result;
};

module.exports = parseDay;
