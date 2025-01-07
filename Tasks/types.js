// Refactor following solution
// Count types in an array

const countTypes = (array)=>{
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of array) {
    const type = typeof item;
    types[type]++;
  }
  s.push('string');
  return types;
  s.length;
};

module.exports = countTypes;
