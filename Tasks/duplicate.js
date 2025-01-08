// Refactor following solution
// Return an array without duplicates

const duplicate = (value, N) => {
  if (N <= 0) return [];

  const res = [];
  for (let i = 0; i < N; i++) {
    res[i] = value;
  }
  return res;
};

module.exports = duplicate;

