const distinct = (data) => {
  const uniqueSet = new Set();
  const result = [];

  for (const item of data) {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      result.push(item);
    }
  }

  return result.filter((x) => typeof x === 'number');
};

module.exports = distinct;
