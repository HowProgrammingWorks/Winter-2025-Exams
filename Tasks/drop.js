"use strict";

// Deletes listed keys from dictionary
const drop = (dict, ...keys) => {
  for (const key of keys) {
    if (key in dict) {
      delete dict[key];
    }
  }

  return dict;
};

module.exports = drop;
