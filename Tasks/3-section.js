SectionString = (str, separator) => {
    if (!separator) return [str, ''];
  
    const index = str.indexOf(separator);
    if (index < 0) {
      return [str, ''];
    } else {
      return [str.slice(0, index), str.slice(index + separator.length)];
    }
  };
  
  module.exports = SectionString;
  