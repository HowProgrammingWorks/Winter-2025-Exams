const Reverse = (data) => {
  const reversed = {};
  Object.keys(data).forEach(key => {
    reversed[data[key]] = key;
  });
  return reversed;
};

module.exports = Reverse;