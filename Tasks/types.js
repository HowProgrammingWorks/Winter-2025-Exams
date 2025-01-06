// Refactor following solution
// Count types in an array

//Fourth step: rename variables, avoid using of the same name

const types = (array) => {
  const typeCounters = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const el of array) {
    const type = typeof el;
    typeCounters[type]++;
  }
  
  return typeCounters;
};

module.exports = types;
