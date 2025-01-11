SectionString = (str, separator) => {
    index = str.indexOf(separator);
    if (index < 0 || separator == '') {
      return [str, ''];
    } else {
      return [str.slice(0, index), str.slice(index + separator.length)];
    }
  };
  
  module.exports = SectionString;
  