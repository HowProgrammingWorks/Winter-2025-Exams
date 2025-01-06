const distinct = (data) => {
  const uniqueSet = new Set();
  const result = [];

  data.forEach((item) => {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      result.push(item);
    }
  });

  return result.filter((x) => typeof x === 'number');
};

module.exports = distinct;
