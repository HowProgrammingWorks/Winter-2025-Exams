const sumNumberValues = (obj) => {
  const keys = Object.keys(obj);
  if (keys.length === 0) return 0;

  let totalSum = 0;
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'number') totalSum += value;
  }
  return totalSum;
};

module.exports = sumNumberValues;
