const duplicate = (value, N) => {
  if (N <= 0) return [];

  const result = [];
  for (let i = 0; i < N; i++) {
    result.push(value);
  }
  return result;
};

module.exports = duplicate;
