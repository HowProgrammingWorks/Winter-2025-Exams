/**
 * Filters array elements by their type
 * @param {Array} array - The input array to filter
 * @param {string} targetType - The type to filter by
 * @returns {Array} The filtered array
 */
const filterByType = (array, targetType) => {
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
module.exports = filterByType;
