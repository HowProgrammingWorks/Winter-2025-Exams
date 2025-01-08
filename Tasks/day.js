let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const parseDay = (day) => 
{
  const index = weekDays.findIndex((weekDay) => day.startsWith(weekDay.toLowerCase()))
  return index !== -1 ? index + 1 : -1
};
module.exports = parseDay;