// Copy all listed keys from dictionary

'use strict';

const take = (dict, ...xor) => {
  const keys = Object.keys(dict).filter((key) => xor.includes(key));
  return keys.reduce((acc, key) => ({ ...acc, [key]: dict[key] }), {});
};

module.exports = take;
