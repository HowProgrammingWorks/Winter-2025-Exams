// Refactor following solution
// Get day number

let D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  if (typeof s !== 'string') return -1;
  const lowerS = s.toLowerCase();
  return D.findIndex(day => day.toLowerCase().startsWith(lowerS)) + 1 || -1;
};


module.exports = parseDay;
