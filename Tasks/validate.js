const isValidate = (T) => {
  if (typeof T !== 'string' || T.trim().length === 0 || !T.includes(' ')) return false;
  return /^[a-zA-Z\s]+$/.test(T);
};

module.exports = isValidate;
