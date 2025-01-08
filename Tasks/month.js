const getMonthNumber = (input) => {
  const Months = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
  ];

  const lowerCaseInput = input.toLowerCase();
  const monthIndex = Months.findIndex((month) => lowerCaseInput.startsWith(month));

  return monthIndex !== -1 ? monthIndex + 1 : -1;
};

module.exports = getMonthNumber;