const distinct = (data) => {
  const uniqueSet = new Set();
  let index = 0;

  data.forEach((item) => {
    if (uniqueSet.has(item)) {
      delete data[index];
    } else {
      uniqueSet.add(item);
    }
    index++;
  });

  return data.filter((x) => typeof x === 'number');
};

module.exports = distinct;
