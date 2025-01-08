tAKe = (DX, ...xor) => {
  const result = {};
  xor.forEach(key => {
    if (key in DX) result[key] = DX[key];
  });
  return result;
};

module.exports = tAKe;

