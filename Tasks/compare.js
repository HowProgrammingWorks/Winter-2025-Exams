// step5
// renamed the function parameters

'use strict';

const compare = (firstObject, secondObject) => {
  const firstEntries = Object.entries(firstObject);
  const secondEntries = Object.entries(secondObject);

  return firstEntries.join('-') === secondEntries.join('-');
};

module.exports = compare;
