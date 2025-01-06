const filter = (array, type) => {
    return array.filter(element => typeof element === type);
}
  
module.exports = filter;