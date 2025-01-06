// Refactor following solution
// Count types in an array

//Third step: add const for variables and function

const types_ = (s) => {
  const types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const i of s) {
    const t = typeof i;
    types_[t]++;
  }
  
  return types_;
};

module.exports = types_;
