// Refactor following solution
// Compare two dictionaries

let compare = (first_values, ...parameters_LIST) => {
  const second_values = parameters_LIST[0];
  let firstValue = Object.keys(first_values);
  let secondValue = Object.keys(second_values);
  if (firstValue.join('-') !== secondValue.join('-')) return false;
  let e = true;
  for (c of firstValue) {
    if (first_values[c] === second_values[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;
