// Refactor following solution
// Compare two dictionaries

const compare = (object1, object2) => {
  const second_values = object2[0];
  const firstKey = Object.keys(firstKey);
  const secondKey = Object.keys(secondKey);
  if (firstKey.join('-') !== secondKey.join('-')) return false;
  let e = true;
  for (const key of firstKey) {
    if (firstKey[c] === secondKey[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;


