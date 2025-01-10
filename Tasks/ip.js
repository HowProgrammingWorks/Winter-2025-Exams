// Refactor following solution
// Split string by the first occurrence of separator
'use strict';

const parseIp = (ipString) => {
  const IP_V4 = 4;
  const parts = ipString.split('.');

  if (!ipString || parts.length !== IP_V4) {
    return undefined;
  }

  const numbers = parts.map((part) => {
    const num = parseInt(part);
    if (isNaN(num) || num < 0 || num > 255) {
      return undefined;
    }

    return num;
  }).filter((part) => part !== undefined);

  return numbers.length === IP_V4 ? numbers : undefined;
};

module.exports = parseIp;
