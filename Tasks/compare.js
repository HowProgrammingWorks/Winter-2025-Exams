// Refactor following solution
// Compare two dictionaries

const compare = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  const firstKeys = Object.keys(firstValues);
  const secondKeys = Object.keys(secondValues);
  if (a.join('-') !== b.join('-')) return false;
  let e = true;
  for (c of a) {
    if (first_values[c] === second_values[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;
