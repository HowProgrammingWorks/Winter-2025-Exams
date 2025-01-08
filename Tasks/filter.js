const Filter = (T, t) => T.filter(item => typeof item === t);

module.exports = Filter;