const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  const index = DAYS.findIndex((day) => str.startsWith(day.toLowerCase()));
  return index !== -1 ? index + 1 : -1;
};

module.exports = parseDay;
