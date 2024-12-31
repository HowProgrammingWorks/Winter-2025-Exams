//STEP 1:
//Do some renaming
//Remove function declaration with function expression

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
  array.push('string');
  return types;
  s.length;
};

module.exports = typesCounter;
