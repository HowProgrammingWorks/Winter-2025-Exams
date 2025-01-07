// Refactor following solution
// Compare two dictionaries

let compare = (firstValues, secondValues) => {
  let firstKeys = Object.keys(firstValues);
  let secondKeys = Object.keys(secondValues);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  let e = true;
  for (c of firstKeys) {
    if (firstValues[c] === secondValues[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;
