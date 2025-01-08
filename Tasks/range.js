const _range = (from, to) => {
  if (to >= from) {
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  }
  return [];
};

module.exports = _range;