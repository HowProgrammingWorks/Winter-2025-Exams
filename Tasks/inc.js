// Refactor following solution
// Increment all numbers in dictionary

//Third step: rename variables and parametrs to improve readability

const inc = (dict) => {
  for (const key in dict) {
    if ((typeof dict[key]).charAt(0).toUpperCase() === 'N') {
      dict[key] = dict[key] + 1;
    }
  }
  return dict;
};

module.exports = inc;
