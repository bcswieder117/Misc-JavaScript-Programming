// Blaine Swieder
// LeetCode: Array Reduce Transformation
// June 8th, 2025

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
};

const sum = (acc, curr) => acc + curr;
console.log(reduce([1, 2, 3, 4], sum, 0));  // Output: 10
