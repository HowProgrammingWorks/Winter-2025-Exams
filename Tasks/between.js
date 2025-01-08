// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (string, prefix, suffix) => {
  const prefixindex = string.indexOf(prefix);
  if (prefixindex === -1) return '';

   const beginning = prefixindex + prefix.length;
   const stringAfterPrefix = string.substring(beginning);

    if (suffix) {
    const suffixindex = stringAfterPrefix.indexOf(suffix);
    if (suffixindex === -1) return '';
     
    suffixstring = stringAfterPrefix.substring(0, suffixindex);
    }

      return suffixstring
    };

module.exports = getValueBetween;
