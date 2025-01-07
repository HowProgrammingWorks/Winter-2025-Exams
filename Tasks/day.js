// Refactor following solution
// Get day number

//Step 1
//Add 'use strict';
//Change identifier name
//Using `const` to declare a function

'use strict';

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const _parse_day_ = (s) => {
  for (let i = 0; i < days.length; i++) {
    if (s.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = _parse_day_;
