SectionString = (str, separator) => {
  i = str.indexOf(separator);
  if (i < 0 || separator == '') {
    return [str, ''];
  } else {
    return [str.slice(0, i), str.slice(i + separator.length)];
  }
};

module.exports = SectionString;
