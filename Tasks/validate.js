// Validates person name
const isValidPersonName = (name) => {
  return /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(name);
};

module.exports = isValidPersonName;