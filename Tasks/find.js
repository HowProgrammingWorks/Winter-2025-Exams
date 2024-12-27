// Refactor following solution
// Find key by value

//Third step: change inner logic of loop, remove extra conditionals

const find = (object, value) => {
  for (const key in object) {
    if (object[key] === value) return key;
  }
  return undefined;
};

module.exports = find;
