let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getDayNumber = (input) => {
  const normalizedInput = input.toLowerCase();
  const dayIndex = days.findIndex((day) => normalizedInput.startsWith(day));
  return dayIndex !== -1 ? dayIndex + 1 : -1;
};

module.exports = getDayNumber;
