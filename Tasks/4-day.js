const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getDayNumber = (input) => {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const normalizedInput = input.toLowerCase();
  const dayIndex = days.findIndex((day) => normalizedInput.startsWith(day));
  return dayIndex !== -1 ? dayIndex + 1 : -1;
};

module.exports = getDayNumber;
