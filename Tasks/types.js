// Refactor following solution
// Count types in an array

types_ = function (s) {
  types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of s) {
    const t = typeof i;
    types_[t]++;
  }
  s.push('string');
  return types_;
  s.length;
};

module.exports = types_;


/** Steps
 * Replace the types_ global variable with the countTypes variable
 * Add argument type checking
 * Delete extra lines
 * Use the local variable const item
 */

const countTypes = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }

  const types = { number: 0, string: 0, boolean: 0 };

  for (const item of array) {
    const type = typeof item;
    if (types[type] !== undefined) {
      types[type]++;
    }
  }

  return types;
};

module.exports = countTypes;