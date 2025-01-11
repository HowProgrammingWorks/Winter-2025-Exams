let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (input) => {
  const normalizedInput = input.toLowerCase();
  const dayIndex = days.findIndex((day) => normalizedInput.startsWith(day.toLowerCase()));
  return dayIndex !== -1 ? dayIndex + 1 : -1;
};

module.exports = getDayNumber;
