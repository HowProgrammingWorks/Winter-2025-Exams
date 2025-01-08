Skip = (T, ...Remove) => T.filter(C => !Remove.includes(C));

module.exports = Skip;
