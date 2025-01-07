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
  return types;
};

module.exports = countTypes;
