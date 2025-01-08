let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (input) => {
  const dayIndex = days.findIndex((day) => input.startsWith(day.toLowerCase()));
  return dayIndex !== -1 ? dayIndex + 1 : -1;
};

module.exports = getDayNumber;
