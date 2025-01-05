// Refactor following solution
// Count words in a string

const countWords = (str) => {
  if (!str.trim()) return 0;

  // Split by whitespace
  return str.trim().split(/\s+/).length;
};

module.exports = countWords;
