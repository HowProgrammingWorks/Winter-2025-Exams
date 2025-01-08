const longest = (strings = []) => {
  if (!Array.isArray(strings) || strings.length === 0) return 'Not found';

  let longestString = strings[0];

  for (const str of strings) {
    if (str.length > longestString.length) {
      longestString = str;
    }
  }

  return longestString;
};

module.exports = longest;