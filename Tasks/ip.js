// Refactor following solution
// Split string by the first occurrence of separator

'use strict';

const parseIP = (input) => {
  const parsed = [];
  if (input === '') return;

    const segments = input.split('.');
    if (segments.length != 4) return;

    for (const segment of segments) {
      const number = parseInt(segment);
      if (isNaN(number)) return;
      parsed.push(number);
    }
  }
  return parsed;
};

module.exports = parseIP;
