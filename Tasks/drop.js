// Refactor following solution
// Delete listed keys from dictionary

//Third step: rename variables to improve readability

const drop = (object, ...keysToRemove) => {
  const keys = Object.keys(object);
  keys.forEach(
    (key) => {
      if (keysToRemove.includes(key)) {
        delete object[key];
      }
    }
  );
  return object;
};

module.exports = drop;
