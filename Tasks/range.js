// Refactor following solution
// Generate int array from given range

//Sixth step: rename function, add empty lines for readability

const range = (from, to) => {
  if (from > to) return [];

  const array = [];
  for (let i = from; i <= to; i++) {
      array.push(i);
  }

  return array;
};

module.exports = range;
