// Refactor following solution
// Extract substring between prefix and suffix

getvaluebetween = (str, p, s) => {
  start = str.indexOf(p);
  end = str.indexOf(s);
  if (start === -1 || end === -1) return '';
  start += p.length;
  return str.slice(start, end);
};

module.exports = getvaluebetween;
