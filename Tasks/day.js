'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (string) => {
  let result;

  result = DAYS.findIndex((element) => string.includes(element));

  if (result !== -1)
    ++result;
  
  return result;
};

module.exports = parseDay;
