const duplicate = (value, N) => {
  return N > 0 ? Array(N).fill(value) : [];
};

module.exports = duplicate;
