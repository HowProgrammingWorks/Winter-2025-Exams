// Refactor following solution
// Generate int array from given range

//Third step: delete unneccesary appropriation

const _range = (...Range) => {
  let [from, to] = Range;
  const array = [];
  if (to >= from) {
    for (let i = from; i <= to; i++) {
      array.push(i);
    }
  } else {
    return [];
  }
  return array;
};

module.exports = _range;
