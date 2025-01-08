const parseDay = (s) => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  if (s !== s.toLowerCase()) return -1;

  const dayIndex = days.findIndex(day => day === s);

  return dayIndex === -1 ? -1 : dayIndex + 1;
};

module.exports = parseDay;