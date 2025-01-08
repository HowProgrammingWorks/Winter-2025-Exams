'use strict'


const getValueBeetween = (str, startValue, endValue) => {
  const startIndex = str.indexOf(startValue);
  if (startIndex === -1) return '';

  const start = startIndex + startValue.length

  if(endValue) {
    const end = str.indexOf(endValue)
    if(end === -1) return ''
    return str.substring(start, end)
  }

  return str.substring(start)
};

module.exports = getValueBeetween;
