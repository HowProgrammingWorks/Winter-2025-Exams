// Refactor following solution
// Increment all numbers in dictionary

//Fourth step: simplify if condition, remove unneeded code

const inc = (dict) => {
  for (const key in dict) {
    if (typeof dict[key] === 'number') {
      dict[key] = dict[key] + 1;
    }
  }
  return dict;
};

module.exports = inc;
