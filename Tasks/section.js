// Step 5
//renamed the function parameters
//delete a check TypeError

'use strict';

const sectionString = (string, section) => {
  const sectionPosition = string.indexOf(section);
  return sectionPosition < 0 || section === ''
    ? [string, '']
    : [string.slice(0, sectionPosition), string.slice(sectionPosition + section.length)];
};

module.exports = sectionString;
