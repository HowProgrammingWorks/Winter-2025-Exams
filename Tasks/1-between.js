const getValueBetween = (str, prefix, suffix) => {
    
    if (typeof str !== 'string' || typeof prefix !== 'string' || (suffix && typeof suffix !== 'string')) {
      throw new TypeError('Inputs must be strings');
    }
  
    const prefixPosition = str.indexOf(prefix);
    if (prefixPosition === -1) return '';
  
    const startPosition = prefixPosition + prefix.length;
    let substring = str.substring(startPosition);
  
    if (suffix) {
      const suffixPosition = substring.indexOf(suffix);
      if (suffixPosition === -1) return '';
      substring = substring.substring(0, suffixPosition);
    }
  
    return substring;
  };
  
  module.exports = getValueBetween;
  