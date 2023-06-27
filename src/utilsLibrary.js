/**
 * Checks if a value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is an object, `false` otherwise.
 */
function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Checks if a value is an instance of an Error object.
 * @param {*} obj - The value to check.
 * @returns {boolean} - Returns `true` if the value is an Error object, `false` otherwise.
 */
function isErrorObject(obj) {
  return obj instanceof Error;
}

/**
 * Checks if a value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a string, `false` otherwise.
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Checks if a value is a boolean.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a boolean, `false` otherwise.
 */
function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Creates a map of input array elements to their corresponding indices.
 *
 * @param {Array} inputArray - The input array.
 * @returns {Map} A map with array elements as keys and their indices as values.
 */
function createInputArrayIndexMap(inputArray) {
  return new Map(inputArray.map((element, index) => [element, index]));
}
