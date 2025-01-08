// Refactor following solution
// Split string by the first occurrence of separator

'use strict';

const parseIP = (input) => {
  if (!input || typeof input !== 'string') return;

  const segments = input.split('.');

  if (segments.length !== 4) return;

  const result = [];
  for (const segment of segments) {
    const number = parseInt(segment, 10);
    if (isNaN(number) || number < 0 || number > 255) return;
    result.push(number);
  }

  return result;
};

module.exports = parseIP;