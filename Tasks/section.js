// Refactor following solution
// Split string into array by the first occurrence of separator

SectionString = (string, substring) => {
  const index = string.indexOf(substring);
  if (index < 0 || !substring) return [string, ''];
  return [string.slice(0, index), string.slice(index + substring.length)];
};

module.exports = SectionString;
