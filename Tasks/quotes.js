// Refactor following solution
// Change double quotation to open or close quotation
'use strict';

const SEPARATOR = '';

const changeQuoteMarks = (string) => {
  const result = [];
  let isQuotesOpen = false;
  for (const char of string) {
    if (char === '"') {
      isQuotesOpen ? result.push('»') : result.push('«');

      isQuotesOpen = !isQuotesOpen;
    } 
    else result.push(char);
  }

  return result.join(SEPARATOR);
};

module.exports = changeQuoteMarks;
