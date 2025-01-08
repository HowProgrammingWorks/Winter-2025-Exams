/**
 * Filters array elements by their type
 * @param {Array} array - The input array to filter
 * @param {string} targetType - The type to filter by
 * @returns {Array} The filtered array
 */
const filterByType = (array, targetType) => {
    let removeIndices = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== targetType) {
            removeIndices.unshift(i);
        }
    }
    for (const index of removeIndices) array.splice(index, 1);
    return array;
};
module.exports = filterByType;
