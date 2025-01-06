const month = (month) => {
    const months = [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ];

    for (let i = 0; i < months.length; i++) 
    {
      if (month.toLowerCase().substring(0,3) == months[i]) 
        {
            return ++i;
        }
    }
    
    return -1;
}
  
module.exports = month;