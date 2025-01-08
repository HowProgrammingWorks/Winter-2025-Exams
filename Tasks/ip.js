// Refactor following solution
// Split string by the first occurrence of separator

'use strict';

const parseIP = (input) => {
  if (!input || input.split('.').length !==4) return;

    const parsed = [];
    const segments = input.split('.');

    for (const segment of segments) {
      const number = parseInt(segment);
      if (isNaN(number)) return;
      parsed.push(number);
    }
  }
  return parsed;
};

module.exports = parseIP;
