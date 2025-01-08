const size = (bytes) => {
  if (bytes === 0) return '0 byte';

  const units = ['byte', 'kb', 'mb', 'gb'];
  const exp = Math.floor(Math.log(bytes) / Math.log(1000));
  const value = Math.round(bytes / Math.pow(1000, exp));

  return `${value} ${units[exp]}`;
};

module.exports = size;