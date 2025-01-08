count = (obj) => {
    let sum = 0;
    Object.values(obj).forEach((value) => {
      if (typeof value === 'number') sum += value;
    });
    return sum;
  };
  