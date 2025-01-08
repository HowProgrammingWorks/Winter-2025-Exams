const EXCEPT = (incomingValues, ...keysToExclude) => {
  const result = { ...incomingValues };
  keysToExclude.forEach(key => delete result[key]);
  return result;
};

module.exports = EXCEPT;
