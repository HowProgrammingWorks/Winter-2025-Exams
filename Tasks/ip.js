// Refactor following solution
// Split string by the first occurrence of separator
'use strict';

const parseIp = (ipString) => {
  const parts = ipString.split('.');

  if (!ipString || parts.length !== 4) {
    return undefined;
  }

  const numbers = [];
  for (const part of parts) {
    const num = parseInt(part);
    if (isNaN(num) || num < 0 || num > 255) {
      return undefined;
    }
    numbers.push(num);
  }

  return numbers;
};

module.exports = parseIp;
