const longest = (stringArray) => {
    let x = 0;
    let longestString;

    for (let i = 0; i < stringArray.length; i++) 
    {
        const temporaryString = stringArray[i];
        if (temporaryString.length > x) 
        {
            x = temporaryString.length;
            longestString = temporaryString;
        } 
    }

    return longestString;
}
  
module.exports = longest;