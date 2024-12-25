// Count types in an array

types_ = function(array) {
  const typeCounts = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (let i of array) {
    const type = typeof(i);
    if(type in typeCounts) {
      typeCounts[type]++
    }
  }
  return typeCounts;
};

module.exports = types_;
