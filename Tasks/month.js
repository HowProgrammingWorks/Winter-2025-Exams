// Get month number

Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

Month = (inputString) => {
  length = Months.length;
  for (let i = 0; i < length; i++) {
    if (inputString.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = Month;
