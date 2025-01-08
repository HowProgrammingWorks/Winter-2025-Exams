// Refactor following solution
// Split string by the first occurrence of separator

'use strict';

const parseIP = (input) => {
  const parsed = [];
  if (input === '') return;

    const segments = input.split('.');
    if (segments.length != 4) return;

    let index = 0;
    for (const segment of segments) {
      parsed[index] = parseInt(segment);
      if (isNaN(parsed[index])) return;
      index++;
    }
  }
  return parsed;
};

module.exports = parseIP;
