// Refactor following solution
// Find key by value

//Fourth step: prefer for..of to for..in

const find = (object, valueToFind) => {
  const props = Object.entries(object);
  for (const [key, value] of props) {
    if (value === valueToFind) return key;
  }
};

module.exports = find;
