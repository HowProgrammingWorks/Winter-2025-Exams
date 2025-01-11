const getValueBetween = (str, prefix, suffix) => {
  const prefixPosition = str.indexOf(prefix); 
  if (prefixPosition === -1) return '';       

  const startPosition = prefixPosition + prefix.length; 
  let substring = str.substring(startPosition);         

  if (suffix) {
    const suffixPosition = substring.indexOf(suffix);   
    if (suffixPosition === -1) return '';              ё
    substring = substring.substring(0, suffixPosition);
  }

  return substring;
};

module.exports = getValueBetween;
