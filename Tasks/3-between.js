const getValueBetween = (str, prefix, suffix) => {
    if (typeof str !== 'string' || typeof prefix !== 'string' || (suffix && typeof suffix !== 'string')) {
      throw new TypeError('Inputs must be strings');
    }
  
    if (str === '') return '';
    if (prefix === '') return suffix ? str.split(suffix)[0] : str;
  
    const prefixPosition = str.indexOf(prefix);
    if (prefixPosition === -1) return '';
  
    const startPosition = prefixPosition + prefix.length;
    const endPosition = suffix ? str.indexOf(suffix, startPosition) : str.length;
  
    if (suffix && endPosition === -1) return '';
  
    return str.substring(startPosition, endPosition);
  };
  
  module.exports = getValueBetween;
  