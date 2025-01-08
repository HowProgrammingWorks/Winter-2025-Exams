// Refactor following solution
// Extract substring between prefix and suffix

getValueBetween = (str, StartValue, endValue) => {
  const startIndex = str.indexOf(StartValue);
  if (StartValue === -1) return '';
  const start = startIndex + StartValue.length
 
  if(endValue) {
    const end = str.indexOf(endValue)
    if(end === -1) return ''
    return str.substring(start, end)
    }

    return str.substring(start)
  };
 
module.exports = getvaluebetween;

