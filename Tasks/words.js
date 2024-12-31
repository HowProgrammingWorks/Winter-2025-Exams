// Count words in a string

const wordsCounter = (string) => {
  const words = string.split(" ");
  const filtered = words.filter((word) => word !== ""); //if string has double+ spaces
  const count = filtered.length;
  return count;
};

module.exports = wordsCounter;

