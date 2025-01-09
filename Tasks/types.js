// Refactor following solution
// Count types in an array

//Fourth step: rename variables, avoid using of the same name

//From gitHub comment: "It is better to create empty collection {} and add keys just after detecting elenents of certain type"
//Yes, it is logic, but there is a problem that tests just doesn't pass with that

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
