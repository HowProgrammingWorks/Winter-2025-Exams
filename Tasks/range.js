// Refactor following solution
// Generate int array from given range

//Second step: create separate array for result

const _range = (...Range) => {
  let [from, to] = Range;
  const array = [];
  if (to >= from) {
    Range = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      array.push(i);
    }
  } else {
    return [];
  }
  return array;
};

module.exports = _range;
