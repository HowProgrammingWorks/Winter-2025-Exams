//STEP 2:
//Delete unreachable code
//Delete "s.push" because of it`s uselesses

const typesCounter = (array) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of array) {
    const type = typeof element;
    types[type]++;
  }
  return types;
};

module.exports = typesCounter;
