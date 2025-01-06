const words = (inputString) => {
    let wordsCount = 0;
    if(inputString)
    {
        const wordsArray = inputString.split(' ');
        wordsCount = wordsArray.length;
    }
    
    return wordsCount;
}
  
module.exports = words;