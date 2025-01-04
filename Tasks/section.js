// Step 1
//add 'use strict'
//add const and let

'use strict';

const SectionString = (s, t) => {
  const i = s.indexOf(t);
  if (i < 0 || t == '') {
    return [s, ''];
  } else {
    return [s.slice(0, i), s.slice(i + t.length)];
  }
};

module.exports = SectionString;
