// Refactor following solution
// Generate int array from given range

//Fourth step: replace "...rest" Range with two parametrs: from and to

const _range = (from, to) => {
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
