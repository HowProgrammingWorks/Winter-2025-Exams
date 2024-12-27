// Get day number

// Step 3
//
// Change days order

'use strict';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const parseDay = (s) => {
  for (let i = 0; i < days.length; i++)
    if (s.startsWith(days[i].toLowerCase())) return i + 1; 
  return -1;
};

console.log( parseDay( 'sunday' ) )