// Copy only listed values from dict

'use strict';

const only = (dict, ...only) => {
  const keys = Object.keys(dict).filter((key) => only.includes(key));
  return keys.reduce((acc, key) => ({ ...acc, [key]: dict[key] }), {});
};

module.exports = only;
