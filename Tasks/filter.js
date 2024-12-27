// Refactor following solution
// Filter array by type name

//First step: add const in variables and function

const Filter = (T, t) => {
  const remove = [];
  for (const C of T) {
    const x = T.indexOf(C);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (const x of remove) T.splice(x, 1);
  return T;
};

module.exports = Filter;
