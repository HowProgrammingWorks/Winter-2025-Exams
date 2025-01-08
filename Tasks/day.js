// Refactor following solution
// Get day number

let D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

_parse_day_ = (s) => {
  for(let i = 0; i < D.length; i++) {
    if (s.startsWith(D[i].toLowerCase())) return ++i;
  }
  return -1;
};

module.exports = _parse_day_;
