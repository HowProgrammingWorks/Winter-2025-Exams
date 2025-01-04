// Step 3
//entering a conditional operator

'use strict';

const sectionString = (s, t) => {
  const sectionPosition = s.indexOf(t);

  return sectionPosition < 0 || t ===''
      ?[s, '']
      :[s.slice(0, sectionPosition), s.slice(sectionPosition + t.length)];
};

module.exports = sectionString;
