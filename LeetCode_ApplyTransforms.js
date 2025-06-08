// Blaine Swieder
// LeetCode: Apply Transform Over Each Element in Array
// June 7th, 2025

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};

function plusone(n) {
    return n + 1;
}

console.log(map([1, 2, 3], plusone)); // [2, 3, 4]
