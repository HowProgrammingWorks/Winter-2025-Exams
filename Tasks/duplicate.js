// Return an array without duplicates

duplicate = (value, n) => {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(value);
  }
  return res;
};

module.exports = duplicate;
