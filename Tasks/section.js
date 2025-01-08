const SectionString = (s, t) => {
  const i = s.indexOf(t);
  return i < 0 || t === '' ? [s, ''] : [s.slice(0, i), s.slice(i + t.length)];
};

module.exports = SectionString;