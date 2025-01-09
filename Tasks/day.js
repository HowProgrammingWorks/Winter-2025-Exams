`use strict`


// Refactor following solution
// Get day number

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];;

_parse_day_ = (s) => {
  let i;
  for (i = 0; i < DAYS.length; i++) {
    if (s.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = _parse_day_;
