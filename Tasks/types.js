// Refactor following solution
// Count types in an array

types = function (s) {
  answer = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of s) {
    const t = typeof i;
    answer[t]++;
  }
  s.push('string');
  return answer;
  s.length;
};

module.exports = types;
