// Refactor following solution
// Count types in an array

//Second step: remove unnecessary code, avoid mutation of incoming parametrs

types_ = (s) => {
  types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of s) {
    const t = typeof i;
    types_[t]++;
  }
  
  return types_;
};

module.exports = types_;
