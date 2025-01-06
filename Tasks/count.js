const sumNumberValues = (obj) => {
  let totalSum = 0;
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') totalSum += value;
  });
  return totalSum;
};

module.exports = sumNumberValues;
