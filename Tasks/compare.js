// Refactor following solution
// Compare two dictionaries

let compare = (firstValues, secondValues) => {
  // Extract keys from both dictionaries
  const a = Object.keys(firstValues);
  const b = Object.keys(secondValues);

  // Check if the keys are the same
  if (a.length !== b.length || !a.every((key, index) => key === b[index])) {
    return false;
  }

  // Check if all corresponding values are equal
  return a.every(key => firstValues[key] === secondValues[key]);
};

module.exports = compare;

