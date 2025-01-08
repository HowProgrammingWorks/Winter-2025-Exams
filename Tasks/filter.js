/**
 * Filters array elements by their type
 * @param {Array} array - The input array to filter
 * @param {string} targetType - The type to filter by
 * @returns {Array} The filtered array
 */
const filterByType = (array, targetType) => {
    if (!Array.isArray(array)) {
        throw new TypeError('First argument must be an array');
    }
    if (typeof targetType !== 'string') {
        throw new TypeError('Second argument must be a type name string');
    }
    
    return array.filter(item => typeof item === targetType);
};
module.exports = filterByType;
