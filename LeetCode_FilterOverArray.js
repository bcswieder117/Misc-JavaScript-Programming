// Blaine Swieder
// LeetCode: Filter Elements from Array
// June 7th, 2025


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

function greaterThan10(n) { return n > 10; }
console.log(filter([0, 10, 20, 30], greaterThan10)); // [20, 30]

