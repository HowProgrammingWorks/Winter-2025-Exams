const Replace = (str, substr, newstr) => {
  if (substr === '') return str;

  let res = '';
  while (true) {
    const index = str.indexOf(substr);
    if (index === -1) return res + str;

    res += str.slice(0, index) + newstr;
    str = str.slice(index + substr.length);
  }
};

module.exports = Replace;