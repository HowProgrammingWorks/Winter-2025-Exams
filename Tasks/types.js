const types_ = (s) => {
  const types = { number: 0, string: 0, boolean: 0 };
  s.forEach(i => {
    const t = typeof i;
    if (types.hasOwnProperty(t)) types[t]++;
  });
  return types;
};

module.exports = types_;
