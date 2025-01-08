// Refactor following solution
// Get day number

let D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  if (typeof s !== 'string') return -1;
  const lowerS = s.toLowerCase();
  for (let i = 0; i < D.length; i++) {
    if (D[i].toLowerCase().startsWith(lowerS)) {
      return i + 1;
    }
  }
  return -1;
};


module.exports = parseDay;
