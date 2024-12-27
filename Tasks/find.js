// Refactor following solution
// Find key by value

//Second step: replace ...rest with value, remove unnecessary and pointless code

const find = (object, value) => {
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  return undefined;
};

module.exports = find;
