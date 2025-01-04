// Step 4
//return new TypeError

'use strict';

const sectionString = (s, t) => {
  if (typeof s !== 'string' || typeof t !== 'string') {
    throw new TypeError('Both arguments must be strings');
  }

  const sectionPosition = s.indexOf(t);
  return sectionPosition < 0 || t === ''
    ? [s, '']
    : [s.slice(0, sectionPosition), s.slice(sectionPosition + t.length)];
};

module.exports = sectionString;
