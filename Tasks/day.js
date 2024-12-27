// Get day number

// Step 2
//
// Remove the brackets from the if statement and for statement

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  for (let i = 0; i < days.length; i++)
    if (s.startsWith(days[i].toLowerCase())) return i + 1; 
  return -1;
};

console.log( parseDay( 'sunday' ) )