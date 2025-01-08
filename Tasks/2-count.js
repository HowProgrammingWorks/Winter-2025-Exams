const count = (obj) => {
    return Object.values(obj).reduce((sum, value) => {
      return typeof value === 'number' ? sum + value : sum;
    }, 0);
  };  