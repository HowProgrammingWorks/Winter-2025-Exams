// Copy only listed values from dict

'use strict';

const only = (dict, ...toCopy) => {
  const keys = Object.keys(dict).filter((key) => toCopy.includes(key));
  return keys.reduce((acc, key) => ({ ...acc, [key]: dict[key] }), {});
};

module.exports = only;
