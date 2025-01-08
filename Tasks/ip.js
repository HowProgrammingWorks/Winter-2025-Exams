// Refactor following solution
// Split string by the first occurrence of separator

const parseIp = (ipString) => {
  numbers = [];
  if (ipString === '') return;
  else {
    parts = ipString.split('.');
    if (parts.length != 4) return;
    j = 0;
    for (const part of parts) {
      numbers[j] = parseInt(part);
      if (isNaN(numbers[j])) return;
      j++;
    }
  }
  return numbers;
};

module.exports = parseIp;
