// Refactor following solution
// Split string by the first occurrence of separator

ParseIp = (ip) => {
  if (ip === '') return;

  const parts = ip.split('.');
  if (parts.length !== 4) return;
    
  const result = [];
  for (const part of parts) {
    const parsed = parseInt(part);
    if (isNaN(parsed)) return;
    result.push(parsed);
  }

  return result;
};

module.exports = ParseIp;
