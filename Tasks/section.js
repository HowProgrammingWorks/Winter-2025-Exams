// Step 2
//edited the compare condition
//improve naming

'use strict';

const sectionString = (s, t) => {
  const sectionPosition = s.indexOf(t);
  if (sectionPosition < 0 || t ==='') {
    return [s, ''];
  } else {
    return [s.slice(0, sectionPosition), s.slice(sectionPosition + t.length)];
  }
};

module.exports = sectionString;
