// Refactor following solution
// Generate int array from given range

//fifth step: simplify function. Add preliminary conditional, delete unnecessary if..else
const _range = (from, to) => {
  if (from > to) return [];
  const array = [];
  for (let i = from; i <= to; i++) {
      array.push(i);
  }
  return array;
};

module.exports = _range;
