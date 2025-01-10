// Count words in a string
// version with flags

const wordsCounter = (string) => {
  let counter = 0;
  let flag = true;
  for (const char of string) {
    if (char === " ") {
      flag = true;
    }
    else if (char !== " " && flag == 1) {
      counter++;
      flag = false;
    }
  }
  return counter;
};

module.exports = wordsCounter;

