const parseIP = (input) => {
  if (!input || typeof input !== 'string') return undefined;

  const parts = input.split('.');
  if (parts.length !== 4) return undefined;

  const result = parts.map(part => {
    if (part === '' || isNaN(part)) return undefined;
    const num = Number(part);
    return num >= 0 && num <= 255 ? num : undefined;
  });

  if (result.includes(undefined)) return undefined;

  return result;
};

module.exports = parseIP;