const Filter = (array, targetType) => {
    let removeIndices = [];
    for (const element of array) {
        let currentIndex = array.indexOf(element);
        if (typeof array[currentIndex] !== targetType) {
            removeIndices.unshift(currentIndex);
        }
    }
    for (const index of removeIndices) array.splice(index, 1);
    return array;
};
module.exports = Filter;
