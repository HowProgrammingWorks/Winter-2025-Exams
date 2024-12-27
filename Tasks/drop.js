// Refactor following solution
// Delete listed keys from dictionary

//Fourth step: remove mutation of incoming parametr, copy origin obj to the new one

const drop = (object, ...keysToRemove) => {
  const keys = Object.keys(object);
  const res = {...object};
  keys.forEach(
    (key) => {
      if (keysToRemove.includes(key)) {
        delete res[key];
      }
    }
  );
  return res;
};

module.exports = drop;
