// Refactor following solution
// Delete listed keys from dictionary

//Fifth step: replace forEach function with for..of loop, create empty lines for readability

const drop = (object, ...keysToRemove) => {
  const res = { ...object };

  const keys = Object.keys(object);
  for (const key of keys) {
    if (keysToRemove.includes(key)) {
      delete res[key];
    }
  }

  return res;
};

module.exports = drop;
