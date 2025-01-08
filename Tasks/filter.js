/**
 * Filters array elements by their type
 * @param {Array} array - The input array to filter
 * @param {string} targetType - The type to filter by
 * @returns {Array} The filtered array
 */
const filterByType = (array, targetType) => {
    const result = [...array];
    let removeIndices = [];
    for (let i = 0; i < result.length; i++) {
        if (typeof result[i] !== targetType) {
            removeIndices.unshift(i);
        }
    }
    for (const index of removeIndices) result.splice(index, 1);
    return result;
};
module.exports = filterByType;
