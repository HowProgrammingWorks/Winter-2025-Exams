// Refactor following solution
// Increment all numbers in dictionary

//Fifth step: reduce incerement expression, add epty line for readability

const inc = (dict) => {
  for (const key in dict) {
    if (typeof dict[key] === 'number') {
      dict[key] += 1;
    }
  }

  return { ...dict };
};

module.exports = inc;
