Filter = (array, targetType) => {
    removeIndices = [];
    for (element of array) {
        currentIndex = array.indexOf(element);
        if (typeof array[currentIndex] !== targetType) {
            removeIndices.unshift(currentIndex);
        }
    }
    for (index of removeIndices) array.splice(index, 1);
    return array;
};

module.exports = Filter;
